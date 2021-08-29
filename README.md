# MMM-AmLich
Lịch Âm Việt Nam cho [MagicMirror²](https://magicmirror.builders/)

Lunar Date Viet Nam

Nguồn tham khảo: [Cách tính lịch Âm](https://www.informatik.uni-leipzig.de/~duc/amlich/)

## Screenshot
![Screenshot](https://github.com/diyeverythingvn/MMM-AmLich/blob/main/SizeBig.PNG?raw=true)

## Install
```sh
cd ~/MagicMirror/modules
git clone https://github.com/diyeverythingvn/MMM-AmLich
```

## Configuration
```sh
nano ~/MagicMirror/config/config.js
```

```js
{
	module: "MMM-AmLich",
	position: "top_left",
	config: {
	}
},
```
<b>Kích thước: Lớn</b>

```js
{
	module: "MMM-AmLich",
	position: "top_left",
	config: {
		size: 'big'
	}
},
```
![Screenshot](https://github.com/diyeverythingvn/MMM-AmLich/blob/main/SizeBig.PNG?raw=true)

<b>Kích thước: Trung bình</b>

```js
{
	module: "MMM-AmLich",
	position: "top_left",
	config: {
		size: 'medium'
	}
},
```
![Screenshot](https://github.com/diyeverythingvn/MMM-AmLich/blob/main/SizeMedium.PNG?raw=true)

<b>Kích thước: Nhỏ</b>

```js
{
	module: "MMM-AmLich",
	position: "top_left",
	config: {
		size: 'small'
	}
},
```
![Screenshot](https://github.com/diyeverythingvn/MMM-AmLich/blob/main/MMM-SizeSmall.PNG?raw=true)
