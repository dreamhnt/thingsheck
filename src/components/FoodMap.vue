<template>
  <div class="wrap">
    <div id="food-map"></div>
    <el-button class="add-btn" round>추가</el-button>
  </div>
</template>

<script>
const maps = window.daum.maps
const mapContainer = document.getElementById('food-map') // 지도를 표시할 div
const mapOption = {
  center: new maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
}
export default {
  name: 'FoodMap',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    makeMarker () {
      const map = new maps.Map(mapContainer, mapOption)

      // 마커가 표시될 위치입니다
      const markerPosition = new maps.LatLng(33.450701, 126.570667)

      // 마커를 생성합니다
      const marker = new maps.Marker({
        position: markerPosition
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)

      let iwContent = `<div style="padding:5px;">Hello World! <br>
      <a href="http://map.daum.net/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a>
      <a href="http://map.daum.net/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>` // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      let iwPosition = new maps.LatLng(33.450701, 126.570667) // 인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      const infowindow = new maps.InfoWindow({
        position: iwPosition,
        content: iwContent
      })

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker)
    },
    getCurrentPosition () {
      let locPosition = null
      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(position => {
          const coords = position.coords
          locPosition = new maps.LatLng(coords.latitude, coords.longitude) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다. 위도,경도
        })
      } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        locPosition = new maps.LatLng(33.450701, 126.570667)
      }
      return locPosition
    },
    initMap () {
      let locPosition = null
      let message = null
      this.map = new maps.Map(document.getElementById('food-map'), mapOption) // 지도를 생성합니다]
      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(position => {
          const coords = position.coords
          locPosition = new maps.LatLng(coords.latitude, coords.longitude) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다. 위도,경도
          message = '<div style="padding:5px;">여기에 계신가요?!</div>' // 인포윈도우에 표시될 내용입니다

          // 마커와 인포윈도우를 표시합니다
          this.displayMarker(locPosition, message)
        })
      } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        locPosition = new maps.LatLng(33.450701, 126.570667)
        message = 'geolocation을 사용할수 없어요..'

        this.displayMarker(locPosition, message)
      }
    },
    displayMarker (locPosition, message) {
      // 마커를 생성합니다
      const marker = new maps.Marker({
        map: this.map,
        position: locPosition
      })
      console.log(marker)
      // 인포윈도우를 생성합니다
      var infowindow = new maps.InfoWindow({
        content: message,
        removable: true
      })

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(this.map, marker)
      this.map.setCenter(locPosition)
    }
  }
}
</script>

<style>
.wrap {
  height: 100%;
}
#food-map {
  width: 100%;
  height: 100%;
}
.add-btn {
  position: absolute;
  overflow: hidden;
  top: 100px;
  right: 40px;
  z-index: 1;
}
</style>
