const list = [
    {
        schedule: [
            {
                room: "XX-229",
                lesionStart: "1",
                lesionEnd: "2",
                startWeek: "1",
                endWeek: "11",
                weekDay: "3",
            },
            {
                room: "XX-428",
                lesionStart: "5",
                lesionEnd: "6",
                startWeek: "1",
                endWeek: "12",
                weekDay: "5",
            },
        ],
        class: ["22031301;22031302"],
        classID: "210300018",
        className: "操作系统",
    },
    {
        schedule: [
            {
                room: "XX-428",
                lesionStart: "7",
                lesionEnd: "8",
                startWeek: "7",
                endWeek: "16",
                weekDay: "2",
            },
            {
                room: "XX-428",
                lesionStart: "7",
                lesionEnd: "8",
                startWeek: "7",
                endWeek: "17",
                weekDay: "5",
            },
        ],
        class: ["22031301;22031302"],
        classID: "210313012",
        className: "计算机信息安全",
    },
];

const zaoba_row = document.querySelector("#zaoba");
const zaoba_item = document.querySelectorAll("#zaoba td");
const zaoshi_item = document.querySelectorAll("#zaoshi td");
const xiayi_item = document.querySelectorAll("#xiayi td");
const xiaer_item = document.querySelectorAll("#xiaer td");
const time = {
    1: zaoba_row,
    3: zaoshi_item,
    5: xiayi_item,
    6: xiaer_item,
};
// lesson就是一门课
for (const lesson of list) {
    // schedule为该门课的上课信息
    const schedule = lesson.schedule;
    // class_time为该门课的上课时间信息
    for (const class_time of schedule) {
        const start = class_time.lesionStart;
        const weekDay = class_time.weekDay;
        console.log(start);
        if (start === "1") {
            zaoba_item[weekDay].textContent = lesson.className;
        } else if (start === "3") {
            zaoshi_item[weekDay].textContent = lesson.className;
        } else if (start === "5") {
            xiayi_item[weekDay].textContent = lesson.className;
        } else if (start === "7") {
            xiaer_item[weekDay].textContent = lesson.className;
        }
    }
}
