var num = 1;
var q = {
  1: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "EI",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  2: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "JP",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  3: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "EI",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  4: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "TF",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  5: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "EI",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  6: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "SN",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  7: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "JP",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  8: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "SN",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  9: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "JP",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  10: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "SN",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  11: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "TF",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  },
  12: {
    "question": "ㅁㅁㅁㅁㅁㅁ",
    "type": "TF",
    "A": "ㅁㅁ",
    "B": "ㅁㅁ"
  }
}

var result = {
  "ISTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISTJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ISFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISFJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ESTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESTJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ESFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESFJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ISTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISTP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ISFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ISFP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ESTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESTP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ESFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ESFP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "INFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? INFP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "INTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? INTP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ENFP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENFP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ENTP": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENTP",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "INFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? INFJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "INTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? INTJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ENFJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENFJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름",
  },
  "ENTJ": {
    "person": "이름",
    "mbti": "당신의 mbti는? ENTJ",
    "explain1": "ㅁㅁㅁㅁㅁ",
    "explain2": "ㅁㅁㅁㅁㅁ",
    "explain3": "ㅁㅁㅁㅁㅁ",
    "good": "이름",
    "bad": "이름"
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
