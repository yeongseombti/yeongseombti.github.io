var num = 1;
var q = {
  1: {
    "question": "우리반에 누군가 전학을 온다는 소식을 들었을 떄",
    "type": "EI",
    "A": "새로운 사람을 만나서 기대된다.",
    "B": "모르는 사람이여서 살짝 불편하다."
  },
  2: {
    "question": "학교에서 시험을 볼 때",
    "type": "JP",
    "A": "오늘 어떤 과목을 공부할지 미리 정한다.",
    "B": "그냥 오늘 하고 싶은 과목을 공부한다."
  },
  3: {
    "question": "학교에서 내준 숙제를 할 때",
    "type": "EI",
    "A": "친구들이랑 같이하는 것이 편하다.",
    "B": "혼자하는 것이 더 편하다."
  },
  4: {
    "question": "내가 결정을 내릴 때",
    "type": "TF",
    "A": "이성적으로 결정한다.",
    "B": "가치관과 느낌으로 결정한다."
  },
  5: {
    "question": "주말에 집에 혼자 있을 때",
    "type": "EI",
    "A": "다른 친구에게 전화해서 게임하자고 한다.",
    "B": "그냥 침대에 누워 있거나 혼자 게임한다."
  },
  6: {
    "question": "학교에서 서울 랜드에 갔을 떄",
    "type": "SN",
    "A": "길을 찾아갈 때 막힘없이 쭉쭉 나아갔다.",
    "B": "중간에 길을 헤매거나 잃었다."
  },
  7: {
    "question": "현재 나의 사물함의 상태는?",
    "type": "JP",
    "A": "잘 정돈 되어있다.",
    "B": "더럽혀져 있다."
  },
  8: {
    "question": "내가 좋아하는 게임을 친구에게 소개할 떄",
    "type": "SN",
    "A": "이 게임의 장르는... 이 게임에 대해 소개한다.",
    "B": "내가 이 게임을 했을 때 느낀 감정을 소개한다."
  },
  9: {
    "question": "내가 생각하는 학교 교칙은?",
    "type": "JP",
    "A": "필수로 있어야 한다고 생각한다.",
    "B": "너무 통제가 심해서 줄여야 한다고 생각한다."
  },
  10: {
    "question": "학교 국어 시간에 글쓰기 수행 평가가 있을 때",
    "type": "SN",
    "A": "주제가 정해져야 글쓸 때 마음이 편하다.",
    "B": "주제없이 내가 표현하고 싶은 걸 쓰고 싶다."
  },
  11: {
    "question": "내가 가지고 있는 강점은?",
    "type": "TF",
    "A": "사건의 원인과 결과를 쉽게 파악한다.",
    "B": "사람의 기분을 쉽게 파악한다."
  },
  12: {
    "question": "친구랑 내가 의견이 다를 때",
    "type": "TF",
    "A": "친구의 의견에 태클을 건다.",
    "B": "친구의 의견을 이해하려고 해본다."
  }
}

var result = {
  "ISTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISTJ",
    "explain1": "신중하고 조용하며 집중력이 강하고 매사에 철저합니다.",
    "explain2": "논리적, 현실적이며 다른 사람에게 신뢰를 받습니다.",
    "explain3": "만사를 체계적으로 조직화시키며 책임감이 강합니다.",
    "good": "ESFJ",
    "bad": "ENFJ",
  },
  "ISFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISFJ",
    "explain1": "조용하고 친근하고 책임감이 있으며 양심이 바릅니다.",
    "explain2": "맡은 일에 헌신적이고 어떤 계획의 추진이나 집단에 안정감을 줍니다.",
    "explain3": "매사에 철저하고 성실하고 정확합니다.",
    "good": "ESFP",
    "bad": "ENTJ",
  },
  "ESTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESTJ",
    "explain1": "구체적이고 현실적이고 사실적입니다.",
    "explain2": "실용성이 없는 일에는 관심이 없으며 필요할 때 응용할 수 있습니다.",
    "explain3": "활동을 조직화하고 주도해 나가기를 좋아합니다.",
    "good": "ISFP",
    "bad": "INFJ",
  },
  "ESFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESFJ",
    "explain1": "마음이 따뜻하고 사람들과 이야기하기를 좋아합니다.",
    "explain2": "양심이 바르고 남을 돕는 데에 타고난 기질이 있습니다.",
    "explain3": "조화를 중시하고 인화를 이루는데 능합니다.",
    "good": "ISTJ",
    "bad": "INTJ",
  },
  "ISTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISTP",
    "explain1": "논리적인 원칙에 따라 사실을 조직화하기를 좋아합니다.",
    "explain2": "절제된 호기심을 가지고 인생을 관찰하고 분석합니다.",
    "explain3": "대체로 인관관계에 관심이 없습니다.",
    "good": "ENFJ",
    "bad": "ENFP",
  },
  "ISFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISFP",
    "explain1": "말없이 다정하고 친절하고 민감합니다.",
    "explain2": "자기 능력을 뽐내지 않고 겸손합니다.",
    "explain3": "의견의 충돌을 피하려고 하며 자기 의견을 강요하지 않습니다.",
    "good": "ESTJ",
    "bad": "ENTP",
  },
  "ESTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESTP",
    "explain1": "현실적인 문제해결에 능합니다.",
    "explain2": "근심이 없고 어떤 일이든 즐길 줄 압니다.",
    "explain3": "기계 다루는 일이나 운동을 좋아합니다.",
    "good": "ISTJ",
    "bad": "INFP",
  },
  "ESFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESFP",
    "explain1": "사고적이고 수용적이고 친절합니다.",
    "explain2": "주위에 벌어지는 일에 관심이 많아 끼어들기를 좋아합니다.",
    "explain3": "추상적인 이론보다는 구체적인 사실을 잘 기억합니다.",
    "good": "ISFJ",
    "bad": "INTP",
  },
  "INFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? INFP",
    "explain1": "정열적이고 충실하나 상대방을 잘 알기 전까지는 드러내지 않습니다.",
    "explain2": "학습, 아이디어, 언어, 자기 독립적인 일에 관심이 많습니다.",
    "explain3": "물질적 소유나 물리적 환경에는 별 관심이 없습니다.",
    "good": "ENTJ",
    "bad": "ESTP",
  },
  "INTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? INTP",
    "explain1": "평소에는 조용하고 과묵한 성격이지만 관심분야에는 말이 많습니다.",
    "explain2": "이론적, 과학적 탐구를 즐깁니다.",
    "explain3": "논리, 분석적인 문제 해결을 좋아합니다.",
    "good": "ENFJ",
    "bad": "ESFP",
  },
  "ENFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENFP",
    "explain1": "따뜻하고 정열적이고 상상력이 풍부합니다.",
    "explain2": "관심이 있는 일이라면 어떤 일이든지 해냅니다.",
    "explain3": "항상 남을 도와줄 태세를 가지고 있습니다.",
    "good": "INTJ",
    "bad": "ISTP",
  },
  "ENTP": {
    "person": "김범서",
    "mbti": "당신의 mbti는? ENTP",
    "explain1": "민첩하고 독창적이며 안목이 넓습니다.",
    "explain2": "새로운 일을 시도하고 추진하려는 의욕이 넘칩니다.",
    "explain3": "새로운 문제나 복잡한 문제를 해결하는 능력이 뛰어납니다.",
    "good": "INFJ",
    "bad": "ISFP",
  },
  "INFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? INFJ",
    "explain1": "인내심이 많고 독창적입니다.",
    "explain2": "인내심이 많고 독창적입니다.",
    "explain3": "양심이 바르고 다른 사람에게 따뜻한 관심을 가지고 있습니다.",
    "good": "ENTP",
    "bad": "ESTJ",
  },
  "INTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? INTJ",
    "explain1": "자기 아이디어나 목표를 달성하는 데 강한 추진력을 가지고 있습니다.",
    "explain2": "회의적, 비판적, 독립적입니다.",
    "explain3": "때로는 고집스러울 때가 있습니다.",
    "good": "ENFP",
    "bad": "ESFJ",
  },
  "ENFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENFJ",
    "explain1": "주위에 민감하며 책임감이 강합니다.",
    "explain2": "사교성이 풍부하고 인기 있고 동정심이 많습니다.",
    "explain3": "편안하고 능란하게 계획을 내놓거나 집단을 이끌어 가는 능력이 있습니다.",
    "good": "ISTP",
    "bad": "ISTJ",
  },
  "ENTJ": {
    "person": "김성주",
    "mbti": "당신의 mbti는? ENTJ",
    "explain1": "열성이 많고 솔직하고 단호하고 통솔력이 있습니다.",
    "explain2": "보통 정보에 밝고 지식에 대한 관심과 욕구가 많습니다.",
    "explain3": "대중 연설과 같이 추리와 지적담화가 요구되는 일에 능합니다.",
    "good": "INFP",
    "bad": "ISFJ"
  }
}
function start() {
  $(".start").hide();
  $(".question").show();
  next();
}
$("#A").click(function() {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function() {
  next();
});

function next() {
  if (num == 13) {
    $(".question").hide();
    $(".result").show();

    var mbti = "";
    ($('#EI').val() < 2) ? mbti += "I": mbti += "E";
    ($('#SN').val() < 2) ? mbti += "N": mbti += "S";
    ($('#TF').val() < 2) ? mbti += "F": mbti += "T";
    ($('#JP').val() < 2) ? mbti += "P": mbti += "J";

    $("#person").html(result[mbti]["person"]);
    $("#mbti_text").html(result[mbti]["mbti"]);
    $("#explain1").html(result[mbti]["explain1"]);
    $("#explain2").html(result[mbti]["explain2"]);
    $("#explain3").html(result[mbti]["explain3"]);
    $("#good").html(result[mbti]["good"]);
    $("#bad").html(result[mbti]["bad"]);


  } else {
    $(".progress-bar").attr('style', 'width: calc(100/12*' + num + '%)');
    $("#question").html(q[num]["question"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++; //num 변수를 활용해 객체 번호를 하나씩 올리는 구조
  }
}
function reload() {
    location.reload();
}
