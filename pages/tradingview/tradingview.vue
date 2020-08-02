<template>
  <view>
    <!-- <view id="tv_chart_container"></view> -->
    <view class="TVChartContainer" id="tv_chart_container"></view>
  </view>
</template>

<script module="tradingview" lang="renderjs">
import { widget as Widget } from '@/static/js/tradingview/charting_library/charting_library.min'

function loadScript(src) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  document.getElementsByTagName('head')[0].appendChild(script)
}

loadScript('/static/js/tradingview/datafeeds/udf/dist/polyfills.js')
loadScript('/static/js/tradingview/datafeeds/udf/dist/bundle.js')

// import '@/static/js/tradingview/datafeeds/udf/dist/polyfills'
// import '@/static/js/tradingview/datafeeds/udf/dist/bundle'
// import '@/static/js/tradingview/charting_library/charting_library.min'

// setTimeout(() => {
//   function initOnReady() {
//   	var widget = window.tvWidget = new TradingView.widget({
//   		// debug: true, // uncomment this line to see Library errors and warnings in the console
//   		fullscreen: true,
//   		symbol: 'AAPL',
//   		interval: '1D',
//   		container_id: "tv_chart_container",

//   		//	BEWARE: no trailing slash is expected in feed URL
//   		datafeed: new Datafeeds.UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
//   		library_path: "charting_library/",
//   		locale: "en",

//   		disabled_features: ["use_localstorage_for_settings"],
//   		enabled_features: ["study_templates"],
//   		charts_storage_url: 'http://saveload.tradingview.com',
//   		charts_storage_api_version: "1.1",
//   		client_id: 'tradingview.com',
//   		user_id: 'public_user_id',
//   		// theme: getParameterByName('theme'),
//   	});
//   };

//   initOnReady()
// }, 2000)

export default {
  props: {
    symbol: {
      default: 'AAPL',
      type: String,
    },
    interval: {
      default: 'D',
      type: String,
    },
    containerId: {
      default: 'tv_chart_container',
      type: String,
    },
    datafeedUrl: {
      default: 'https://demo_feed.tradingview.com',
      type: String,
    },
    libraryPath: {
      // default: '/charting_library/',
      default: '/static/js/tradingview/charting_library/',
      type: String,
    },
    chartsStorageUrl: {
      default: 'https://saveload.tradingview.com',
      type: String,
    },
    chartsStorageApiVersion: {
      default: '1.1',
      type: String,
    },
    clientId: {
      default: 'tradingview.com',
      type: String,
    },
    userId: {
      default: 'public_user_id',
      type: String,
    },
    fullscreen: {
      default: false,
      type: Boolean,
    },
    autosize: {
      default: true,
      type: Boolean,
    },
    studiesOverrides: {
      type: Object,
    },
  },

  data() {
    return {
      tvWidget: null,
    }
  },

  mounted() {
    // this.loadScript('/static/js/tradingview/charting_library/charting_library.min.js')
    // this.loadScript('/static/js/tradingview/datafeeds/udf/dist/polyfills.js')
    // this.loadScript('/static/js/tradingview/datafeeds/udf/dist/bundle.js')

    // this.loadScript('http://localhost/datafeeds/udf/dist/polyfills.js')
    // this.loadScript('http://localhost/datafeeds/udf/dist/bundle.js')

    // setTimeout(() => {
    //   this.initOnReady()
    // }, 1000)

    setTimeout(() => {
      console.log(window.Datafeeds)
      const widgetOptions = {
        symbol: this.symbol,
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.datafeedUrl),
        interval: this.interval,
        container_id: this.containerId,
        library_path: this.libraryPath,
        locale: 'en',
        disabled_features: ['use_localstorage_for_settings'],
        enabled_features: ['study_templates'],
        charts_storage_url: this.chartsStorageUrl,
        charts_storage_api_version: this.chartsStorageApiVersion,
        client_id: this.clientId,
        user_id: this.userId,
        fullscreen: this.fullscreen,
        autosize: this.autosize,
        studies_overrides: this.studiesOverrides,
      }

      const tvWidget = new Widget(widgetOptions)
      
      this.tvWidget = tvWidget
      tvWidget.onChartReady(() => {
        tvWidget.headerReady().then(() => {
          const button = tvWidget.createButton()
          button.setAttribute('title', 'Click to show a notification popup')
          button.classList.add('apply-common-tooltip')
          button.addEventListener('click', () =>
            tvWidget.showNoticeDialog({
              title: 'Notification',
              body: 'TradingView Charting Library API works correctly',
              callback: () => {
                // eslint-disable-next-line no-console
                console.log('Noticed!')
              },
            }),
          )
          button.innerHTML = 'Check API'
        })
      })
    }, 2000)
  },

  methods: {
    loadScript(src) {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = src
      document.getElementsByTagName('head')[0].appendChild(script)
    },
  },

  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  },
}
</script>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.TVChartContainer {
  height: calc(100vh - var(--window-top));
}
</style>
