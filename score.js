let high_score = localStorage.getItem("hiscore");
high_score - JSON.parse(high_score);
if(high_score != null){
    let data_html = `<div class="tr">
        <div class="th game-th">Snake Mania</div>
        <div class="th hi-score-th" style="border-left: 1px white solid;">${high_score}</div>
        </div>`
        $(".table-body").append(data_html);
}
else{
    let data_html = `<div class="tr">
    <div class="th game-th">Snake Mania</div>
    <div class="th hi-score-th" style="border-left: 1px white solid;">0</div>
    </div>`
    $(".table-body").append(data_html);
}
