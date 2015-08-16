<<<<<<< HEAD
/*
 * Quiz Editor
 * author: Ying Zhao
 *
 * reorganized and refactored Dov Kruger and Asher Davidson 8/12/2015
 * All parameters are now passed to build methods by storing them in this.
 * Not so robust, but it streamlines the code 
 */

QuizEdit.newid = 0;

function QuizEdit() {
    this.body = document.getElementById("container");
    this.body.className = "quizEditor";
}

QuizEdit.CTRL = "editctrl";
QuizEdit.BUTTON = "editbutton";

QuizEdit.prototype.openBracket = "[[";
QuizEdit.prototype.closeBracket = "]]";

QuizEdit.prototype.addBrackets = function(ta, selStart, selEnd) {
    var v = ta.value;
    ta.value = v.substring(0, selStart) + ' ' + this.openBracket +
	v.substring(selStart, selEnd)
	+ this.closeBracket + ' ' + v.substring(selEnd);
}

//TODO: Remove dependence on JQuery
QuizEdit.prototype.currentEdit;

//Perform all actions to complete a question edited and added to the end of the quiz
QuizEdit.prototype.completeEdit = function(array) {
    $("#submitDiv-2").remove();
    $("#editor").remove(); // remove from window
    $("#qC").remove();
//    var array = buildFunc(); //.apply(this||window, Array.prototype.slice.call(arguments, 1));
    var newQ = 	[
	--QuizEdit.newid, this.titleInp.value, 'numeric', //TODO: add points and level!
    ];
    if (this.textBox.value !== '') {
	newQ.push(['instructions', this.textBox.value]);
    }

    for (var i = 0; i < array.length; i++) {
	newQ.push(array[i]); //TODO: What if each one is empty?
    }
    page.questions.push(newQ);
    console.log(page.questions);
    url.load(false);
    scrollToId('qc' + Quiz.newid);
}

// create a question, display it, remove the editor
//TODO: Have a mode where it automatically keeps the editor open for multiple questions?
QuizEdit.prototype.addQuestion = function() {
    var t = this;
    return function() { t.completeEdit(t.cbFunc());};
}

QuizEdit.prototype.addSubQuestion = function() {
    var t = this;
    return function() { t.completeEdit(t.cbFunc());};
}

// Cancel a question, add nothing and remove the editor
QuizEdit.prototype.cancel = function() {

}

QuizEdit.prototype.addFields = function(editorFormId, cbFunc) {
    this.cbFunc = cbFunc;
    var c = Util.form(null, editorFormId, editorFormId);
    this.qc.appendChild(c);
    for (var i = 3; i < arguments.length; i++)
	c.appendChild(arguments[i]);
    c.appendChild(Util.button("Add Question", null, null, this.addQuestion()));
    c.appendChild(Util.button("Add Question", null, null, this.addSubQuestion()));
}

QuizEdit.prototype.buildFillin = function() {
    return [
            ['fillin', newid],
    ];
};

QuizEdit.prototype.editFillin = function() {
    this.addFields('Fillin', this.buildFillin,
 		   Util.span("Answer: "),
 		   this.ans = Util.input("text", "ans", "ans")
    );
};

QuizEdit.prototype.buildNumber = function() {
    return [
	['numeric', QuizEdit.newid]
    ];
};

QuizEdit.prototype.editNumber = function() {
    this.addFields('Number', this.buildNumber,
		   Util.span("Min: "), this.min = Util.input("text", "min"), 
		   Util.span("Max: "), this.max = Util.input("text", "max")
		  );
}

QuizEdit.prototype.buildEssay = function() {
    return [
	['essay', 14, this.textAreaRows.value, this.textAreaCols.value, 200],
    ];
}

QuizEdit.prototype.editEssay = function() {
    this.addFields("Essay", this.buildEssay,
		   Util.span("Rows:"), this.textAreaRows = Util.input("number", "rows", null, 10),
		   Util.span("Cols:"), this.textAreaCols = Util.input("number", "cols", null, 80));
}

QuizEdit.prototype.buildCode = function() {
    return [
	['instructions', "Please use " + this.selectedLanguage + " to code"],
	['code', --QuizEdit.newid, "", this.textAreaRows.value, this.textAreaCols.value]
    ];
}

QuizEdit.prototype.editCode = function() {
    this.addFields
    ("Code", this.buildCode,
     Util.span("Rows:"), this.textAreaRows = Util.input("number", "rows", null, 10),
     Util.span("Cols:"), this.textAreaCols = Util.input("number", "cols", null, 80),
     Util.select(null, null,
		 ["-Select Language-", "C++", "Java", "Python", "Perl", "Processing"], null, "langSelect")
    );
}

QuizEdit.prototype.buildMCDropdown = function() {
    return [
	['selectText', --QuizEdit.newid, this.answers]
    ];
}

QuizEdit.prototype.buildMCRadioTextVert = function() {
    return [
	['mcRadioTextVert', --QuizEdit.newid, this.answers]
    ];
}

QuizEdit.prototype.buildMCRadioTextHoriz = function() {
    return [
	['mcRadioTextHoriz', --QuizEdit.newid, this.answers]
    ];
}

QuizEdit.prototype.buildMAnswer = function() {
    return [
	['multiAnswer', --QuizEdit.newid, this.answers]
    ];
}

QuizEdit.prototype.editMC = function(questionType) {
    var description = document.createTextNode("Multiple choice - Dropdown :"
					      + "Correct Answer" + "Add more options");
    var numberBox = Util.input("text", QuizEdit.EDITCTRL, "optionCount");
    var addOption = function() {
	var count = numberBox.value;
	if (1 <= count && count <= 100){
	    optionClicks += parseInt(numberBox.value,10); 
	    console.log(optionClicks);
	    for(var i = 0; i < numberBox.value; i++){
		oneMCDDOption(form, "o" + id_o++);
	    }
	} else {
	    optionClicks++;
	    oneMCDDOption(form, "o" + id_o++);
	}
	scrollToId(id);
    };
    var deleteAnswer = function() {


    };
    var ansTable, stdChoice;
    var createStdChoice = function() {
	var name = stdChoice.value;
	if (name === '')
	    return; //TODO: alert? need a name for a standard choice
	console.log(this);
	var answers = [];
	for (var i = 0; i < ansTable.rows; i++) {
	    answers.push(document.getElementById("a"+i));
	}
	Quiz.stdChoice[name] = answers;
    }
    this.qc.appendChild
    (Util.divadd
     (null,
      Util.input("number", QuizEdit.EDITCTRL, "optionAdd"),
      Util.button("Add Option", QuizEdit.EDITBUTTON, addOption),
      Util.span("Name"),
      stdChoice = Util.input("text", 'editInput', 'stdChoice'),
      Util.button("Create Standard Choice", null, null, createStdChoice)
     ));

    var list = [ ["Answer Id", "Answer", "correct"] ];
    for (var row = 0; row < 4; row++) {
	list.push([row,
		   Util.input("text", QuizEdit.EDITCTRL, "a"+row),
		   Util.checkbox(null, "check"+row, "editCB", "check"+row),
		   Util.button("delete", null, null, deleteAnswer)]);
    }
    var ansTable = Util.table(list, true);

    this.addFields("MultiChoiceDropdown", questionType, ansTable, div);
    this.answers = [];
}

QuizEdit.prototype.editMultiChoiceDropdown = function() {
    this.editMC(this.buildMCDropdown);
}

QuizEdit.prototype.editMultiChoiceRadioVert = function() {
    this.editMC(this.buildMCRadioTextVert);
}

QuizEdit.prototype.editMultiChoiceRadioHoriz = function() {
    this.editMC(this.buildMCRadioTextVert);
}

QuizEdit.prototype.editMultiAnswer = function() {
    this.editMC(this.buildMAnswer);
}

QuizEdit.prototype.addStandardChoice = function(name, choices, nameBlank) {
    Quiz.stdChoice[name] = choices;
}

QuizEdit.prototype.editSurvey = function() {
    this.editMC(this.buildSurvey);
}

QuizEdit.prototype.buildCloze = function(){
    return [
	['cloze', --QuizEdit.newid, this.text],
    ];
}

QuizEdit.prototype.editCloze = function() {
    var ta;
    this.addFields('Cloze', this.buildCloze,
		   ta = Util.textarea(null, "cloze", "x", this.textAreaRows, this.textAreaCols),
		   Util.span("Rows:"), this.textAreaRows = Util.input("number", "rows", null, 10),
		   Util.span("Cols:"), this.textAreaCols = Util.input("number", "cols", null, 80),
		   Util.button("SquareBracket It!", null, null, function(){addBrackets(ta, selStart, selEnd) } )
  		  );
    var selStart, selEnd;
//    var exampleClozeTest = 'public class A {\n [[]]  public [[]] '+
//	'void main(strings [] args) {\n  System.println.out("hello");\n  }\n}';
    
    ta.onmouseup = function(){ selStart = ta.selectionStart; 
			       selEnd = ta.selectionEnd; 
			       console.log(ta.selectionStart + "," + ta.selectionEnd); }
    ta.ondblclick = function(){this.addBrackets(ta, selStart, selEnd)};
}

QuizEdit.prototype.buildRegex = function() {
    return [
            ['fillin', newid],
    ];
};

QuizEdit.prototype.editRegex = function() {
    this.addFields('Fillin', this.buildFillin,
 		   Util.span("Answer: "),
 		   this.ans = Util.input("text", "ans", "ans")
    );
};

QuizEdit.prototype.buildMatrix = function() {
    return [
            ['fillin', newid],
    ];
};

QuizEdit.prototype.editMatrix = function() {
    this.addFields('Fillin', this.buildFillin,
 		   Util.span("rows: "),
 		   this.ans = Util.input("number", "", "ans")
    );
};

//Complete list of every question type supported by editQuestion
QuizEdit.questionTypes = [
    "-Choose QuestionType-",
    "Fillin", "Number", "Essay", "Code",
    "MultiChoiceDropdown", "Survey", "MultiChoiceRadio", "MultiAnswer",
    "Regex", "Matrix", "Cloze"
];

QuizEdit.multipleChoiceTypes = [
    "-Choose Multiple Choice Type-",
    "MultiChoiceDropdown", "MultiChoiceRadioVert", "MultiChoiceRadioHoriz", "MultiAnswer", "Matching", "Survey", 
];

QuizEdit.shortAnswerTypes = [
    "-Choose Short Answer Type-",
    "Fillin", "Number", "Regex"
];

QuizEdit.otherTypes = [
    "-Choose Other Question Type-",
    "Essay", "Code", "Matrix", "Cloze", "ImgClick",
    "Diagram"
];

QuizEdit.random = [
    "-Choose Random Element-",
    "Integer", "Decimal", "String", "Name"
];

// Support adding images, audio and video into a question.  Any additional multimedia controls belong here
QuizEdit.prototype.insertMultimedia = function() {
}

QuizEdit.imageFileTypes = "jpg,jpeg,png,eps,gif,bmp";
QuizEdit.audioFileTypes = "mp3,ogg,wav";
QuizEdit.videoFileTypes = "mpg,mpeg,mp4";

QuizEdit.prototype.editQuestion = function() {
    var editor = Util.div("editor", "editor");
    this.body.appendChild(editor);

    editor.appendChild(Util.h1("Question Editor"));
    var meta = [
	["Title", Util.input("text", QuizEdit.EDITCTRL, "title")],
	["Level:", Util.input("number", QuizEdit.EDITCTRL, "level", 1)],
	["Points:", Util.input("number", QuizEdit.EDITCTRL, "points", 1)],
    ];
    editor.appendChild(Util.table(meta));
    
    var list = [	
	["Question Text:", this.textBox = Util.textarea(null, "textArea", "blankbox", 5, 60),
	 Util.divadd(null, Util.h2("Insert"), Util.button("Instructions"), Util.button("paragraph"), Util.button("Code"), Util.button("Equation"))
	]
    ];
    editor.appendChild(Util.table(list));
    var imgUpload = Util.file(QuizEdit.imageFileTypes, QuizEdit.EDITCTRL, "image_src");
    var audioUpload = Util.file(QuizEdit.audioFileTypes, QuizEdit.EDITCTRL, "audio_src");
    var videoUpload = Util.file(QuizEdit.videoFileTypes, QuizEdit.EDITCTRL, "video_src");
    var ins = [
	[ Util.filebutton("Image", imgUpload, QuizEdit.EDITBUTTON, null),
	  Util.filebutton("Audio", audioUpload, QuizEdit.EDITBUTTON, null),
	  Util.filebutton("Video", videoUpload, QuizEdit.EDITBUTTON, null)],
	[ Util.button("Equation", QuizEdit.EDITBUTTON), Util.button("Matrix", QuizEdit.EDITBUTTON), Util.button("Regex", QuizEdit.EDITBUTTON)         ],
	[ Util.select("random", false, QuizEdit.random, QuizEdit.EDITCTRL),
	  Util.button("", QuizEdit.EDITBUTTON),
	  Util.button("", QuizEdit.EDITBUTTON)         ],
	[ Util.select("multChoice", false, QuizEdit.multipleChoiceTypes, QuizEdit.EDITCTRL),
	  Util.select("ShortAnswer", false, QuizEdit.shortAnswerTypes, QuizEdit.EDITCTRL),
	  Util.select("otherQuest", false, QuizEdit.otherTypes, QuizEdit.EDITCTRL)
	]

    ];
    editor.appendChild(Util.divadd(Util.h2("Insert"), Util.table(ins)));
    scrollToId("editor");
}
