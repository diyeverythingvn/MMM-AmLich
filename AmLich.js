var TK21 = new Array(
		0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
		0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
		0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
		0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
		0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
		0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
		0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
		0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
		0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
		0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
); /* Years 2000-2099 */
  
var TK22 = new Array(
		0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
		0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
		0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
		0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
		0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
		0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
		0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
		0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
		0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
		0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
); /* Years 2100-2199 */

var CAN = new Array("Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý");
var CHI = new Array("Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi");
var TUAN = new Array("Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy");
var THANG = new Array("Giêng", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Một", "Chạp");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xuân Phân", "Thanh Minh", "Cốc Vũ", "Lập Hạ", "Tiểu Mãn", "Mang Chủng",
	"Hạ Chí", "Tiểu Thử", "Đại Thử", "Lập Thu", "Xử Thử", "Bạch Lộ",
	"Thu Phân", "Hàn Lộ", "Sương Giáng", "Lập Đông", "Tiểu Tuyết", "Đại Tuyết",
	"Đông Chí", "Tiểu Hàn", "Đại Hàn", "Lập Xuân", "Vũ Thủy", "Kinh Trập"
);

/* Create lunar date object, stores (lunar) date, month, year, leap month indicator, and Julian date number */
function LunarDate(dd, mm, yy, leap, jd, length) {
	this.day = dd;
	this.month = mm;
	this.year = yy;
	this.leap = leap;
	this.jd = jd;
	this.length = length;
}

var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
	return Math.floor(d);
}

function jdn(dd, mm, yy) {
	var a = INT((14 - mm) / 12);
	var y = yy+4800-a;
	var m = mm+12*a-3;
	var jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
	return jd;
}

function decodeLunarYear(yy, k) {
	var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
	var ly = new Array();
	monthLengths = new Array(29, 30);
	regularMonths = new Array(12);
	offsetOfTet = k >> 17;
	leapMonth = k & 0xf;
	leapMonthLength = monthLengths[k >> 16 & 0x1];
	solarNY = jdn(1, 1, yy);
	currentJD = solarNY+offsetOfTet;
	j = k >> 4;
	for(i = 0; i < 12; i++) {
		regularMonths[12 - i - 1] = monthLengths[j & 0x1];
		j >>= 1;
	}
	if (leapMonth == 0) {
		for(mm = 1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm-1]));
			currentJD += regularMonths[mm-1];
		}
	} else {
		for(mm = 1; mm <= leapMonth; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm-1]));
			currentJD += regularMonths[mm-1];
		}
		ly.push(new LunarDate(1, leapMonth, yy, 1, currentJD, leapMonthLength));
		currentJD += leapMonthLength;
		for(mm = leapMonth+1; mm <= 12; mm++) {
			ly.push(new LunarDate(1, mm, yy, 0, currentJD, regularMonths[mm-1]));
			currentJD += regularMonths[mm-1];
		}
	}
	return ly;
}

function getYearInfo(yyyy) {
	var yearCode;
	if (yyyy < 1900) {
		yearCode = TK19[yyyy - 1800];
	} else if (yyyy < 2000) {
		yearCode = TK20[yyyy - 1900];
	} else if (yyyy < 2100) {
		yearCode = TK21[yyyy - 2000];
	} else {
		yearCode = TK22[yyyy - 2100];
	}
	return decodeLunarYear(yyyy, yearCode);
}

var FIRST_DAY = jdn(25, 1, 1800); // Tet am lich 1800
var LAST_DAY = jdn(31, 12, 2199);

function findLunarDate(jd, ly) {
	if (jd > LAST_DAY || jd < FIRST_DAY || ly[0].jd > jd) {
		return new LunarDate(0, 0, 0, 0, jd, 0);
	}
	var i = ly.length-1;
	while (jd < ly[i].jd) {
		i--;
	}
	var off = jd - ly[i].jd;
	ret = new LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd, ly[i].length);
	return ret;
}

function getLunarDate(dd, mm, yyyy) {
	var ly, jd;
	ly = getYearInfo(yyyy);
	jd = jdn(dd, mm, yyyy);
	if (jd < ly[0].jd) {
		ly = getYearInfo(yyyy - 1);
	}
	return findLunarDate(jd, ly);
}

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
	var T, T2, dr, M, L0, DL, lambda, theta, omega;
	T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
	T2 = T*T;
	dr = PI/180; // degree to radian
	M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
	L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
	DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
	DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
    theta = L0 + DL; // true longitude, degree
    // obtain apparent longitude by correcting for nutation and aberration
    omega = 125.04 - 1934.136 * T;
    lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
    // Convert to radians
    lambda = lambda*dr;
	lambda = lambda - PI*2*(INT(lambda/(PI*2))); // Normalize to (0, 2*PI)
    return lambda;
}

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
function getSolarTerm(dayNumber, timeZone) {
	return INT(SunLongitude(dayNumber - 0.5 - timeZone/24.0) / PI * 12);
}

function getYearCanChi(year) {
	return CAN[(year+6) % 10] + " " + CHI[(year+8) % 12];
}

/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
	return CAN[(jdn-1)*2 % 10];
}

function getGioHoangDao(jd) {
	var chiOfDay = (jd+1) % 12;
	var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
	var ret = "";
	var count = 0;
	for (var i = 0; i < 12; i++) {
		if (gioHD.charAt(i) == '1') {
			ret += CHI[i];
			ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
			if (count++ < 5) ret += ', ';
			if (count == 3) ret += '\n';
		}
	}
	return ret;
}

function YearlyEvent(dd, mm, info) {
	this.day = dd;
	this.month = mm;
	this.info = info;
}

var YEARLY_EVENTS = new Array(
  new YearlyEvent(1,1,'Tết Nguyên Đán'),
  new YearlyEvent(15,1,'Rằm Tháng Giêng'),
  new YearlyEvent(10,3,'Giỗ Tổ Hùng Vương (10/3 ÂL)'),
  new YearlyEvent(15,4,'Phật Đản (15/4 ÂL)'),
  new YearlyEvent(5,5,'Tết Đoan Ngọ (5/5 ÂL)'),
  new YearlyEvent(15,7,'Vu Lan (15/7 ÂL)'),
  new YearlyEvent(15,8,'Tết Trung Thu (Rằm Tháng 8)'),
  new YearlyEvent(23,12,'Ông Táo chầu trời (23/12 ÂL)')
);

function findEvents(dd, mm) {
	var ret = new Array();
	for (var i = 0; i < YEARLY_EVENTS.length; i++) {
		evt = YEARLY_EVENTS[i];
		if (evt.day == dd && evt.month == mm) {
			ret.push(evt);
		}
	}
	return ret;
}

function getDayInfo(dd, mm) {
	var events = findEvents(dd, mm);
	var ret = '';
	for (var i = 0; i < events.length; i++) {
		ret += events[i].info+' ';
	}
	ret += '&nbsp;';
	//ret = 'Giỗ Tổ Hùng Vương (10/3 ÂL)';
	return ret;
}

function alertInfo(jd) {
	//var hoangdao = 'Giờ hoàng đạo: '+ getGioHoangDao(jd);
	//alert(hoangdao);
}

function updateDateTime() {
	var today = new Date();
	var currentDate = today.getDate();
	var currentMonth = today.getMonth()+1;
	var currentYear = today.getFullYear();
	var lunarDate = getLunarDate(currentDate, currentMonth, currentYear);
	var yy = lunarDate.year;
	var mm = lunarDate.month;
	var dd = lunarDate.day;
	var jd = lunarDate.jd;
	var Std = today.getHours();
	var Min = today.getMinutes();
	var Sec = today.getSeconds();
	var s1  = ((Std < 10) ? "0" + Std : Std);
	var s2  = ((Min < 10) ? "0" + Min : Min);
	var s3  = ((Sec < 10) ? "0" + Sec : Sec);
	var now = s1 + ":" + s2 + ":" + s3;
	var chiGio = (Std >= 23) ? 0 : INT((Std + 1) / 2);
	var canGio = ((jd-1)*2 + INT((Std + 1) / 2)) % 10;
	var dayOfWeek = TUAN[(jd + 1) % 7];
	var nhuan = (lunarDate.leap == 1) ? ' nhuận' : '';
	var thangAm = 'Tháng '+THANG[mm-1]+nhuan+(lunarDate.length == 30 ? ' (Đ)' : ' (T)');
	var thang = CAN[(yy*12+mm+3) % 10] + " " + CHI[(mm+1)%12];
	var ngay = CAN[(jd + 9) % 10] + " " + CHI[(jd+1)%12];
	var info = getDayInfo(dd, mm);
  	document.getElementById("gio").innerHTML = now;
  	document.getElementById("thu").innerHTML = dayOfWeek;
  	document.getElementById("ngayduong").innerHTML = currentDate+'/'+currentMonth+'/'+currentYear;
  	document.getElementById("dayinfo").innerHTML = info;
	document.getElementById("thangam").innerHTML = thangAm;
	document.getElementById("ngayam").innerHTML = dd;
	document.getElementById("namam").innerHTML = 'Năm '+getYearCanChi(yy);
	document.getElementById("canchithang").innerHTML = 'Tháng '+thang;
	document.getElementById("canchingay").innerHTML = 'Ngày '+ngay;
	document.getElementById("canchigio").innerHTML = 'Giờ '+CAN[canGio]+' '+CHI[chiGio];
	document.getElementById("tietkhi").innerHTML = 'Tiết '+TIETKHI[getSolarTerm(jd+1, 7.0)];
    document.getElementById("giohoangdao").innerHTML = getGioHoangDao(jd);
}

function updateDateTimeMedium() {
	var today = new Date();
	var currentDate = today.getDate();
	var currentMonth = today.getMonth()+1;
	var currentYear = today.getFullYear();
	var lunarDate = getLunarDate(currentDate, currentMonth, currentYear);
	var yy = lunarDate.year;
	var mm = lunarDate.month;
	var dd = lunarDate.day;
	var jd = lunarDate.jd;
	var Std = today.getHours();
	var Min = today.getMinutes();
	var Sec = today.getSeconds();
	var s1  = ((Std < 10) ? "0" + Std : Std);
	var s2  = ((Min < 10) ? "0" + Min : Min);
	var s3  = ((Sec < 10) ? "0" + Sec : Sec);
	var now = s1 + ":" + s2 + ":" + s3;
	var chiGio = (Std >= 23) ? 0 : INT((Std + 1) / 2);
	var canGio = ((jd-1)*2 + INT((Std + 1) / 2)) % 10;
	var dayOfWeek = TUAN[(jd + 1) % 7];
	var nhuan = (lunarDate.leap == 1) ? ' nhuận' : '';
	var thangAm = 'Tháng '+THANG[mm-1]+nhuan+(lunarDate.length == 30 ? ' (Đ)' : ' (T)');
	var thang = CAN[(yy*12+mm+3) % 10] + " " + CHI[(mm+1)%12];
	var ngay = CAN[(jd + 9) % 10] + " " + CHI[(jd+1)%12];
	var info = getDayInfo(dd, mm);
  	document.getElementById("ngayduongmedium").innerHTML = currentDate+'/'+currentMonth+'/'+currentYear;
  	document.getElementById("dayinfomedium").innerHTML = info;
	document.getElementById("thangammedium").innerHTML = thangAm;
	document.getElementById("ngayammedium").innerHTML = dd;
	document.getElementById("namammedium").innerHTML = 'Năm '+getYearCanChi(yy);
	document.getElementById("canchithangmedium").innerHTML = 'Tháng '+thang;
	document.getElementById("canchingaymedium").innerHTML = 'Ngày '+ngay;
	document.getElementById("canchigiomedium").innerHTML = 'Giờ '+CAN[canGio]+' '+CHI[chiGio];
	document.getElementById("tietkhimedium").innerHTML = 'Tiết '+TIETKHI[getSolarTerm(jd+1, 7.0)];
    document.getElementById("giohoangdaomedium").innerHTML = getGioHoangDao(jd);
}

function updateDateTimeSmall() {
	var today = new Date();
	var currentDate = today.getDate();
	var currentMonth = today.getMonth()+1;
	var currentYear = today.getFullYear();
	var lunarDate = getLunarDate(currentDate, currentMonth, currentYear);
	var yy = lunarDate.year;
	var mm = lunarDate.month;
	var dd = lunarDate.day;
	var jd = lunarDate.jd;
	var Std = today.getHours();
	var Min = today.getMinutes();
	var Sec = today.getSeconds();
	var s1  = ((Std < 10) ? "0" + Std : Std);
	var s2  = ((Min < 10) ? "0" + Min : Min);
	var s3  = ((Sec < 10) ? "0" + Sec : Sec);
	var now = s1 + ":" + s2 + ":" + s3;
	var chiGio = (Std >= 23) ? 0 : INT((Std + 1) / 2);
	var canGio = ((jd-1)*2 + INT((Std + 1) / 2)) % 10;
	var dayOfWeek = TUAN[(jd + 1) % 7];
	var nhuan = (lunarDate.leap == 1) ? ' nhuận' : '';
	var thangAm = 'Tháng '+THANG[mm-1]+nhuan+(lunarDate.length == 30 ? ' (Đ)' : ' (T)');
	var thang = CAN[(yy*12+mm+3) % 10] + " " + CHI[(mm+1)%12];
	var ngay = CAN[(jd + 9) % 10] + " " + CHI[(jd+1)%12];
	var info = getDayInfo(dd, mm);
  	document.getElementById("dayinfosmall").innerHTML = info;
	document.getElementById("thangamsmall").innerHTML = thangAm;
	document.getElementById("ngayamsmall").innerHTML = dd;
	document.getElementById("namamsmall").innerHTML = 'Năm '+getYearCanChi(yy);
	document.getElementById("canchithangsmall").innerHTML = 'Tháng '+thang;
	document.getElementById("canchingaysmall").innerHTML = 'Ngày '+ngay;
	document.getElementById("canchigiosmall").innerHTML = 'Giờ '+CAN[canGio]+' '+CHI[chiGio];
	document.getElementById("tietkhismall").innerHTML = 'Tiết '+TIETKHI[getSolarTerm(jd+1, 7.0)];
    document.getElementById("giohoangdaosmall").innerHTML = getGioHoangDao(jd);
}

function printTable() {
    var ret = '';
	ret += '<table class="ngay" align="center" width="100%" border="0" cellpadding="1" cellspacing="1">\n';
	ret += '<tr>\n';
	ret += '<td id="gio" class="ngaythangduong"></td>\n';
	ret += '<td id="thu" class="ngaythangduong"></td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" id="ngayduong" class="ngayduong"></td>\n';
	ret += '</tr>\n';
	
	ret += '<tr>\n';
	ret += '<td colspan="2" id="dayinfo" class="info"></td>\n';
	ret += '</tr>\n';
	
	ret += '<tr>\n';
	ret += '<td>\n';
	ret += '<div id="thangam" class="thangnamam"></div>\n';
	ret += '<div id="ngayam" class="ngayam"></div>\n';
	ret += '<div id="namam" class="thangnamam"></div>\n';
	ret += '</td>\n';
	ret += '<td class="canchi">\n';
	ret += '<div id="canchithang" class="gioam"></div>\n';
	ret += '<div id="canchingay" class="gioam"></div>\n';
	ret += '<div id="canchigio" class="gioam"></div>\n';
	ret += '<div id="tietkhi" class="gioam"></div>\n';
	ret += '</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" class="hoangdao">Giờ hoàng đạo:</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" id="giohoangdao" class="hoangdao"></td>\n';
	ret += '</tr>\n';
	ret += '</table>\n';
	return ret;
}

function printTableMedium() {
    var ret = '';
	ret += '<table class="ngay" align="center" width="100%" border="0" cellpadding="1" cellspacing="1">\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" id="ngayduongmedium" class="ngayduong"></td>\n';
	ret += '</tr>\n';
	
	ret += '<tr>\n';
	ret += '<td colspan="2" id="dayinfomedium" class="info"></td>\n';
	ret += '</tr>\n';
	
	ret += '<tr>\n';
	ret += '<td>\n';
	ret += '<div id="thangammedium" class="thangnamam"></div>\n';
	ret += '<div id="ngayammedium" class="ngayam"></div>\n';
	ret += '<div id="namammedium" class="thangnamam"></div>\n';
	ret += '</td>\n';
	ret += '<td class="canchi">\n';
	ret += '<div id="canchithangmedium" class="gioam"></div>\n';
	ret += '<div id="canchingaymedium" class="gioam"></div>\n';
	ret += '<div id="canchigiomedium" class="gioam"></div>\n';
	ret += '<div id="tietkhimedium" class="gioam"></div>\n';
	ret += '</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" class="hoangdao">Giờ hoàng đạo:</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" id="giohoangdaomedium" class="hoangdao"></td>\n';
	ret += '</tr>\n';
	ret += '</table>\n';
	return ret;
}

function printTableSmall() {
    var ret = '';
	ret += '<table class="ngay" align="center" width="100%" border="0" cellpadding="1" cellspacing="1">\n';
	
	ret += '<tr>\n';
	ret += '<td colspan="2" id="dayinfosmall" class="info"></td>\n';
	ret += '</tr>\n';
	
	ret += '<tr>\n';
	ret += '<td>\n';
	ret += '<div id="thangamsmall" class="thangnamam"></div>\n';
	ret += '<div id="ngayamsmall" class="ngayam"></div>\n';
	ret += '<div id="namamsmall" class="thangnamam"></div>\n';
	ret += '</td>\n';
	ret += '<td class="canchi">\n';
	ret += '<div id="canchithangsmall" class="gioam"></div>\n';
	ret += '<div id="canchingaysmall" class="gioam"></div>\n';
	ret += '<div id="canchigiosmall" class="gioam"></div>\n';
	ret += '<div id="tietkhismall" class="gioam"></div>\n';
	ret += '</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" class="hoangdao">Giờ hoàng đạo:</td>\n';
	ret += '</tr>\n';
	ret += '<tr>\n';
	ret += '<td colspan="2" id="giohoangdaosmall" class="hoangdao"></td>\n';
	ret += '</tr>\n';
	ret += '</table>\n';
	return ret;
}

function printData() {
    window.setInterval("updateDateTime()",1000);
    return printTable();
}

function printDataMedium() {
    window.setInterval("updateDateTimeMedium()",2000);
    return printTableMedium();
}

function printDataSmall() {
    window.setInterval("updateDateTimeSmall()",2000);
    return printTableSmall();
}
