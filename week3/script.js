var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

// Returns map of student name as key with grade as value.
function getNameToGradeMapping() {
    let map = new Map();
    grades.split(", ").sort().forEach(element => {
        let nameWithGrade = element.split("|");
        map.set(nameWithGrade[0], nameWithGrade[1]);
    });
    return map;
}

function getGradesList() {
    let gradesList = [];
    grades.split(", ").sort().forEach(element => {
        gradesList.push(parseInt(element.split("|")[1]));
    });
    return gradesList;
}

function getAverage(gradesList) {
    let x = 0;
    for (let i = 0; i < gradesList.length; i++) {
        x = x + gradesList[i];
    }
    return x / gradesList.length;
}