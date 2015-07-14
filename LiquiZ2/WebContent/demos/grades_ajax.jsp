new Grades({
	teacher: {
	    favoriteqt: "mcRadioText",
	    defaultGradingScheme: 'grad',
	    regex: []
	},
	 
	categories: {
	  homework: {
	  	percent: 5,
	  	contents: [
	  		["id", "name", "long name", "points"],
	  		[1, "HW1a", "", 100],
	  		[2, "HW1b", "", 100],
	  		[3, "HW1c", "", 100],
	  		[4, "HW2a", "", 100],
	  		[5, "HW2b", "", 100],
	  		[6, "HW4b", "", 100],
	  		[7, "HW5a", "", 100],
	  		[8, "HW6a", "", 100],
	  		[9, "HW6b", "", 100],
	  		[10, "HW6c", "", 100],
	  		[11, "HW7a", "", 100],
	  		[12, "HW7b", "", 100],
	  		[13, "HW11a", "", 100],
	  		[14, "HW11b", "", 100],
	  	]
	  },
	  quizzes: {
	  	percent: 5,
	  	contents: [
	  		['id', 'name', 'long name', 'points'],
	  		[15, 'Q1', 'Intro to Processing', 100],
	  		[16, 'Q2', 'Java Integer Data Types', 100],
	  		[17, 'Q3', 'Java Integer Data Types', 100],
	  	]
	  },
	  tests: {
	  	percent: 90,
	  	contents: [
	  		['id', 'name', 'long name', 'points'],
	  		[15, "midterm", "midterm exam", 45],
	  		[16, "final", "final exam", 55],
	  	]
	  }
	}// end categories
	}, 
	[
		['FirstName','LastName','ID','Section','HW1a','HW1b','HW1c','HW2a','HW2b','HW4b',
		'HW5a', 'HW6A', 'HW6b', 'HW6c', 'HW7a', 'HW7b', 'HW5b', 'HW11a','HW11b','Midterm','Final','Letter Grade'],
		['Elvin','Abreu Jr.',100,'C',100,100,100,100,95,100,90,90,100,100,100,100,100,100,100,92,85,'A'],
		['Ghalib','Alshammri',101,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B'],
		['Yifei','Cai ',102,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,90,100,92,85,'A'],
		['Feng','Chen',103,'J',100,100,90,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'A'],
		['Hongyi','Chen',104,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,100,90,95,85,'A'],
		['Si','Chen',105,'C',100,100,100,100,100,100,0,90,100,100,100,100,100,100,100,95,85,'A'],
		['Luis','Degli Esposte Rosa',106,'C',100,100,100,100,100,100,100,90,100,100,100,100,0,98,0,95,85,'B'],
		['Jared','Dickman',107,'J',100,100,100,100,0,100,0,90,100,0,98,0,100,0,85,95,85,'A'],
		['Ke','Du',108,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,95,85,'A'],
		['Jianmin','Duan',109,'J',100,100,100,100,100,0,100,90,100,100,100,100,100,100,100,95,85,'A'],
		['Zhaolong','Fu',110,'C',100,100,95,100,100,100,100,90,90,100,100,100,100,100,100,95,85,'B'],
		['Xin','Gao',111,'J',100,100,100,100,100,100,100,90,90,90,100,100,100,100,100,95,85,'A'],
		['Xun','Gu',112,'J',100,100,100,100,100,100,100,90,0,100,100,100,100,100,100,95,85,'A'],
		['Chao','Guo',113,'J',100,100,100,100,100,100,100,90,100,0,100,100,100,100,100,95,85,'C'],
		['Poonam','Gupta',114,'C',100,100,100,100,100,100,100,90,100,100,100,100,0,100,100,95,85,'A'],
		['Xiangyu','He',115,'C',100,100,100,100,90,100,100,90,100,98,100,100,100,100,100,95,85,'A'],
		['Wentian','Ji',116,'J',100,100,100,100,90,100,100,90,100,100,100,100,100,0,100,95,85,'A'],
		['Qun','Jia',117,'C',100,100,100,100,100,100,100,90,100,100,100,100,0,100,100,95,85,'C+'],
		['Bitian','Jiang',118,'J',100,100,95,100,100,100,100,90,100,90,100,100,100,100,100,92,85,'A'],
		['Yiran','Jin',119,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'A-'],
		['Xiayang','Kong',120,'J',100,100,100,100,90,100,100,90,100,100,95,100,100,100,100,92,85,'A-'],
		['Junru','Lang',121,'J',100,100,100,100,90,100,100,90,100,100,100,100,100,100,100,80,85,'B-'],
		['Jicun','Li',122,'J',100,100,100,90,100,100,100,90,100,100,100,100,100,100,100,82,85,'A-'],
		['Weijiang','Li',123,'J',100,100,100,90,100,100,100,90,100,100,100,100,100,100,100,84,85,'A-'],
		['Zixin','Li',124,'J',100,100,100,90,100,100,100,90,100,100,100,100,100,100,100,82,85,'C-'],
		['Jiayue','Liu',125,'C',100,100,100,90,100,100,100,90,100,100,100,100,100,100,100,81,85,'A-'],
		['Ye','Liu',126,'J',100,100,100,90,90,100,100,90,100,100,100,100,100,100,100,88,85,'A-'],
		['Shuyu','Luo',127,'J',100,100,100,90,90,100,100,90,100,100,100,100,100,100,100,87,85,'B-'],
		['Chen','Ma',128,'C',100,100,100,100,100,100,100,90,100,100,98,100,100,100,100,86,85,'A-'],
		['Teng','Ma',129,'J',100,100,90,100,100,100,100,90,100,100,90,100,100,90,100,85,85,'C-'],
		['Yue','Ma',130,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,84,85,'C+'],
		['Bo','Pang',131,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,85,85,'C+'],
		['Preeti','Rai',132,'C',100,100,90,100,100,100,100,90,100,100,100,100,0,100,100,92,85,'B+'],
		['Shravan','Singh',133,'C',100,100,90,100,90,100,100,90,100,100,100,100,100,100,100,92,85,'B+'],
		['Xinyang','Sun',134,'J',100,100,90,100,90,100,100,90,100,100,100,100,100,100,100,92,85,'A+'],
		['Ziqi','Tan',135,'J',100,100,100,100,100,100,100,90,100,0,100,100,100,100,100,92,85,'A+'],
		['Xiaoran','Tao',136,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B+'],
		['Matias','Torres Brausz',137,'C',100,100,100,100,100,100,100,90,100,100,100,100,0,100,90,92,85,'B'],
		['Shouyuan','Wang',138,'C',100,100,100,100,90,0,100,90,100,100,95,100,100,100,100,92,85,'B'],
		['Zhe','Wang',139,'C',100,100,90,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B'],
		['Zhen','Wang',140,'J',100,100,100,100,95,100,0,90,100,0,100,100,100,0,100,92,85,'B'],
		['Yuhang','Wen',141,'J',100,100,100,100,100,100,100,90,100,100,100,100,0,100,100,92,85,'A'],
		['Haoran','Wu',142,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'A'],
		['Xuefan','Wu',143,'J',100,100,100,100,90,100,100,90,95,90,95,95,100,90,100,92,85,'C-'],
		['Fan','Yang',144,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Fengjia','Yao',145,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Zhengkai','Ye',146,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'A-'],
		['Ziao','Ye',147,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'A-'],
		['Ming','Yi',148,'J',100,100,100,100,100,100,100,90,100,90,95,100,100,100,100,92,85,'C-'],
		['Zhuo','Yin',149,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Biyao','Zhang',150,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Cong','Zhang',151,'J',100,100,100,100,95,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Shichao','Zhang',152,'J',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B-'],
		['Zhe','Zhang',153,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,90,100,92,85,'C+'],
		['Qiming','Zhao',154,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'C+'],
		['Ying','Zhao',155,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'C+'],
		['Siyuan','Zheng',156,'J',80,100,100,100,100,100,100,90,90,90,100,100,100,90,90,92,85,'A+'],
		['Xiaoli','Zheng',157,'C',100,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'C+'],
		['Chen','Zhong',158,'C',95,100,100,100,100,100,100,90,100,100,100,100,100,100,100,92,85,'B+'],
		['Liou','Zhou',159,'C',100,100,100,100,100,100,100,90,100,100,100,100,0,100,100,92,85,'C+'],
		['Longxiang','Zhou',160,'J',100,100,100,100,100,100,100,90,100,90,100,100,100,100,95,92,85,'B+']
	]
);

