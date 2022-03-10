<template>
  <view class="jsonview">
    <view @click="toggleClose" :class="['angle', isShow ? 'closed' : '']" v-if="length"></view>
    <view class="first-line">
      <view v-if="jsonKey" class="json-key">"{{ jsonKey }}":</view>
      <view v-if="length" class="json-fold">{{ prefix }} {{ isShow ? '...' + subfix : '' }}</view>
      <view v-if="!length">{{ isArray ? '[]' : '{}' }}</view>
    </view>
    <view class="json-body" v-if="!isShow && length" v-for="(item, index) in items">
      <y-json-view
        v-if="item.isJSON"
        :key="index"
        :json="item.value"
        :jsonKey="item.key"
        :isLast="index === items.length - 1"
      ></y-json-view>
      <view class="json-item" v-else>
        <view class="json-index" v-if="isArray">{{ index }}</view>
        <view class="json-key" v-else>{{ '"' + item.key + '"' }}</view>
        <view class="json-colon"><view>:</view></view>
        <view class="json-value">{{ item.value + (index === items.length - 1 ? '' : ',') }}</view>
      </view>
    </view>
    <view v-if="!isShow && length" class="last-line">
      <view>{{ subfix }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'y-json-view',
  props: {
    json: {
      type: [Object, Array],
      default: null,
    },
    jsonKey: {
      type: String,
      default: '', //第一个键
    },
    isLast: {
      type: Boolean,
      default: true,
    },
    closed: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.isShow = this.closed
  },
  watch: {
    closed: function () {
      this.isShow = this.closed
    },
  },
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    isObjectOrArray(source) {
      const type = Object.prototype.toString.call(source)
      const res = type === '[object Array]' || type === '[object Object]'
      return res
    },
    toggleClose() {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
  },
  computed: {
    isArray() {
      return Object.prototype.toString.call(this.json) === '[object Array]'
    },
    length() {
      //返回数组长度或对象的属性个数
      return this.isArray ? this.json.length : Object.keys(this.json).length
    },
    subfix() {
      return (this.isArray ? ']' : '}') + (this.isLast ? '' : ',')
    },
    prefix() {
      return this.isArray ? '[' : '{'
    },
    items() {
      const json = this.json
      if (this.isArray) {
        return this.json.map((item) => {
          const isJSON = this.isObjectOrArray(item)
          //console.log(item)
          return {
            value: item, // isJSON ? item : JSON.stringify(item),
            isJSON, //相当于isJson:isJson
            key: '',
          }
        })
      } else {
        return Object.keys(json).map((key) => {
          const item = json[key]
          const isJSON = this.isObjectOrArray(item)
          return {
            value: item, // isJSON ? item : JSON.stringify(item),
            isJSON,
            key,
          }
        })
      }
    },
  },
}
</script>
<style lang="scss">
$tab: 40upx; //缩进
$font-size: 16px;
$colon-size: 7px; //冒号两边的间隔
$arrow-size: 7px;
$arrow-color: #333;
$key-color: #c35e00;
$index-color: #00f;
$vaule-color: #42c800;

.jsonview {
  padding-left: $tab;
  margin: 0;
  font-size: $font-size;
  line-height: $font-size * 1.62;
  white-space: nowrap;
}

.first-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  .json-key {
    color: $key-color;
  }

  .json-fold {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
}

.json-body {
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: row;

  .json-item {
    display: flex;
    padding-left: $tab;
    margin: 0;
    text-align: center;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .json-index {
      color: $index-color;
    }

    .json-colon {
      padding: 0 $colon-size;
    }

    .json-key {
      color: $key-color;
    }

    .json-value {
      color: $vaule-color;
    }
  }
}

.last-line {
  display: flex;
  flex-direction: row;
  padding-left: 0;
}

.angle {
  position: absolute;
  left: 0;
  display: block;
  text-align: center;

  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-color: transparent;
    border-top-color: $arrow-color;
    border-style: solid;
    border-width: $arrow-size;
    content: '';
  }

  &.closed::after {
    border-color: transparent;
    border-left-color: $arrow-color;
    border-style: solid;
    border-width: $arrow-size;
  }
  //}
}
</style>
