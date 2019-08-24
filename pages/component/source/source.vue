<template>
	<view class="bg-white">
		<uni-calendar ref="calendar" :insert="false" :start-date="'2019-3-2'" :end-date="'2019-9-20'" @confirm="confirmDate" />
		<scroll-view scroll-x scroll-y class="source-table">
			<cu-custom bgColor="bg-white" :isBack="false">
				<block slot="right">
					<view class="update_course text-theme">
						更新
					</view>
				</block>

				<block slot="content">
					<view class="course-today" @click="openDate">
						第15周
						<text class="cuIcon-unfold" style="margin-left: 10upx;"></text>
					</view>
				</block>
			</cu-custom>
			<view class="table-h">
				<view class="table-h-item">
					<view class="table-h-box">
						<view class="table-title">
							<view class="table-title-tag bg-white shadow">
								<text class="tag-time text-theme">时间</text>
								<view class="line">
								</view>
								<text class="tag-date text-theme">日期</text>
							</view>
						</view>
						<view class="table-date bg-white shadow">
							<view class="table-date-item" :class="index==isWeek?'istoday':''" v-for="(item,index) in week" :key="index" @tap="weekSelect"
							 :data-id="index">
								<text>{{item.name}}</text>
								<text>{{item.time}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="table-main bg-white">
				<view class="source-time">
					<view class="time-item" v-for="(item,index) in classTime" :key="index">
						<text class="class-begin">{{item.begin}}</text>
						<text class="class-num">{{index+1}}</text>
						<text class="class-over">{{item.over}}</text>
					</view>
				</view>
				<view class="class-course">
					<view class="course-item" :class="ws_k==isWeek?'isClass':''" v-for="(ws,ws_k) in course" :key="ws_k">
						<view class="course-info" v-for="(item,index) in ws" :key="(index)">
							<view class="on-couerse" :class="'on-course-bg-' + item" v-if="isClass(item)">
								<text class="course-name">{{courses[isClass(item)][0]}}</text>
								<text class="teacher-name">{{courses[isClass(item)][3]}}</text>
								<text class="class-addr">{{courses[isClass(item)][2]}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		uniCalendar
	} from "@/components/uni-calendar/uni-calendar"

	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				"isWeek": 2,
				"week": [{
					"name": "周一",
					"time": "08-12",
					"isWeek": false
				}, {
					"name": "周二",
					"time": "08-13",
					"isWeek": true
				}, {
					"name": "周三",
					"time": "08-14",
					"isWeek": false
				}, {
					"name": "周四",
					"time": "08-15",
					"isWeek": false
				}, {
					"name": "周五",
					"time": "08-16",
					"isWeek": false
				}],
				"classTime":[
					{
						"begin":"08:00",
						"over":"08:45"
					},
					{
						"begin":"08:50",
						"over":"09:35"
					},
					{
						"begin":"10:05",
						"over":"10:50"
					},
					{
						"begin":"10:55",
						"over":"11:40"
					},
					{
						"begin":"14:30",
						"over":"15:15"
					},
					{
						"begin":"15:20",
						"over":"16:05"
					},
					{
						"begin":"16:15",
						"over":"17:00"
					},
					{
						"begin":"17:05",
						"over":"17:50"
					},
					{
						"begin":"19:00",
						"over":"19:45"
					},
					{
						"begin":"19:50",
						"over":"20:35"
					},
				],
				"course": [
					["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H","1I","1J"],
					["2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H","2I","2J"],
					["3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H","3I","3J"],
					["4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H","4I","4J"],
					["5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H","5I","5J"]
				],
				courses: [
					["java程序基础", "1EF", "综合楼517", "肖祥"],
					["java程序基础", "1GH", "综合楼513", "肖祥"],
					["java程序基础", "2AB", "综合楼513", "肖祥"],
					["java程序基础", "2CD", "综合楼513", "肖祥"],
					["计算机应用基础", "5AB", "禹兴园3-214", "吴锋珍"],
					["MySQL数据库系统", "4EF", "禹兴园3-214", "张显华"],
					["MySQL数据库系统", "5EF", "综合楼513", "张显华"],
					["MySQL数据库系统", "5GH", "综合楼513", "张显华"],
					["大学生心理健康教育", "1AB", "禹兴园3-214", "杨永青"],
					["毛泽东思想和中国特色社会主义理论体系概论", "3AB", "禹兴园3-108", "刘玉萍"],
					["毛泽东思想和中国特色社会主义理论体系概论", "4AB", "禹兴园3-108", "刘玉萍"]
				]
			}
		},
		methods: {
			openDate() {
				this.$refs.calendar.open()
			},
			confirmDate(e) {
				console.log(e);
			},
			weekSelect(e) {
				this.isWeek = e.currentTarget.dataset.id;
			},
			isClass(addr) {
				var course = this.courses
				for (var i in course) {
					if (addr == course[i][1].substring(0, 2)) {
						return i
					}
				}
				return false
			}
		}
	}
</script>

<style>
	.update_course {
		margin-left: 30upx;
		font-size: 32upx;
	}

	.course-today {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 38upx;
	}

	.source-table {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100vh;
	}

	.table-h {
		width: 100%;
		height: 100upx;
	}

	.table-h-item {
		width: 100%;
		position: fixed;
	}

	.table-h-box {
		height: 100upx;
		display: flex;
		justify-content: flex-start;
	}

	.table-title {
		height: 100upx;
		width: 73upx;
		position: fixed;
		left: 0;
	}

	.table-title-tag {
		height: 100upx;
		width: 73upx;
		position: relative;
		font-size: 22upx;
		z-index: 99;
	}

	.table-title-tag>.line {
		height: 100upx;
		width: 73upx;
		background: linear-gradient(45deg, transparent 49.5%, #eeeeee 49.5%, #eeeeee 50.5%, transparent 50.5%);
	}

	.table-title-tag>.tag-time {
		left: 5upx;
		position: absolute;
		bottom: 8upx;
	}

	.table-title-tag>.tag-date {
		right: 5upx;
		position: absolute;
		top: 8upx;
	}

	.table-date {
		padding-left: 73upx;
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.table-date>.istoday {
		width: 124% !important;
		border-bottom: 5upx solid #49C628;
	}

	.table-date>.table-date-item {
		height: 100upx;
		width: 94%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.table-date>.table-date-item>text {
		text-align: center;
		line-height: 40upx;
	}

	.table-date>.table-date-item>text:last-child {
		font-size: 22upx;
		line-height: 40upx;
	}


	.table-main {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.table-main>.source-time {
		width: 80upx;
		background: #f1f1f1;
		display: flex;
		flex-direction: column;
	}

	.source-time>.time-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 156upx;
		border-bottom: 3upx dashed #DDDDDD;
	}

	.source-time>.time-item>text {
		text-align: center;
		line-height: 40upx;
		font-size: 26upx;
	}

	.source-time>.time-item>.class-begin,
	.source-time>.time-item>.class-over {
		line-height: 30upx !important;
		font-size: 22upx !important;
	}

	.class-course {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.class-course .course-item {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100%;
		width: 94%;
	}

	.course-item .course-info {
		width: 100%;
		height: 156upx;
		border-bottom: 3upx dashed #DDDDDD;
		color: #FFFFFF;
	}

	.class-course .isClass {
		width: 124% !important;
	}

	.on-couerse {
		width: 100%;
		height: 200%;
		padding: 30upx 5upx 30upx 5upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.on-course-bg-1A,
	.on-course-bg-3A,
	.on-course-bg-5A,
	.on-course-bg-1E,
	.on-course-bg-3E,
	.on-course-bg-5E {
		background: #ABDCFF;
	}

	.on-course-bg-2A,
	.on-course-bg-4A,
	.on-course-bg-2E,
	.on-course-bg-4E {
		background: #FEB692;
	}

	.on-course-bg-1C,
	.on-course-bg-3C,
	.on-course-bg-5C,
	.on-course-bg-1C,
	.on-course-bg-3C,
	.on-course-bg-5C {
		background: #90F7EC;
	}

	.on-course-bg-1G,
	.on-course-bg-3G,
	.on-course-bg-5G,
	.on-course-bg-1G,
	.on-course-bg-3G,
	.on-course-bg-5G {
		background: #EE9AE5;
	}

	.on-course-bg-2C,
	.on-course-bg-4C,
	.on-course-bg-2G,
	.on-course-bg-4G {
		background: #70F570;
	}
	.on-couerse text{
		text-align: center;		
	}
	.on-couerse .course-name {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		font-size:28upx;
	}
	.on-couerse .teacher-name {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.on-couerse .class-addr {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
