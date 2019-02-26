console.log( "\n4. 10명의 학생 성적을 출력하는 프로그램(function 사용)\n" );

const MAX_SUBJECT = 3;
const EXCELLENT = 90;
const FAIL = 60;

var students = [
    { name: "hong", subjects: [ 50, 50, 50 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "kim", subjects: [ 90, 90, 90 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "lee", subjects: [ 70, 70, 70 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "park", subjects: [ 60, 60, 60 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "yoon", subjects: [ 40, 40, 40 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "im", subjects: [ 30, 30, 30 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "oh", subjects: [ 20, 20, 20 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "kang", subjects: [ 77, 77, 77 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "gong", subjects: [ 80, 80, 80 ], total: 0, average: 0.0, grade: "Normal", rank: 0 },
    { name: "seo", subjects: [ 66, 86, 88 ], total: 0, average: 0.0, grade: "Normal", rank: 0 }
];

function report_card1(){
    for ( var student of students ) {
        for ( var subject of student["subjects"] ) {
            student["total"] += subject;
        }
        student["average"] = student["total"] / MAX_SUBJECT;
        if ( student["average"] >= EXCELLENT ) {
            student["grade"] = "Excellent";
        } else if ( student["average"] < FAIL ) {
            student["grade"] = "Fail";
        }
    }
}

function report_card(){
    for (var i = 0; i < students.length; i++){
        for (var j = 0; j < MAX_SUBJECT; j++){
            students[i].total += students[i].subjects[j];
        }
        students[i].average = students[i].total / MAX_SUBJECT;
        if (students[i].average >= EXCELLENT){
            students[i].grade = "Excellent";
        } else if (students[i].average >= FAIL){
            students[i].grade = "Normal";
        } else {
            students[i].grade = "Fail";
        }
    }
}

function report_rank(){
    var sorted = students.slice().sort(function(a,b){return b["total"]-a["total"]});
    var ranks = students.slice().map(function(v){ return sorted.indexOf(v)+1 });
    for (var i = 0; i < students.length; i++){
        students[i].rank = ranks[i];
    }
}

function report_sort(){
    students.sort( function(a, b){
        return b["total"] - a["total"];
    });
}

function report_print(){
    for (var i = 0; i < students.length; i++){
        console.log(`${students[i].name}\t${students[i].subjects[0]}\t${students[i].subjects[1]}\t${students[i].subjects[2]}\t${students[i].total}\t${students[i].average.toFixed(2)}\t${students[i].grade}    \t${students[i].rank}`);
    }
    console.log();
}

//report_card1();
report_card();
report_rank();
report_print();
report_sort();
report_print();
