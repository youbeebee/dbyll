---
layout: post
title:  "매직 더 개더링 아레나 - 한글패치 공개"
categories: [arena]
tags: [arena, korean]
comments: true
description: 매직 더 개더링 아레나 - 유저 한글패치
---

<style>
span.emphasis {
  font-size: 150%;
}
</style>

<div class="alert alert-info" role="alert">
					<strong>2019-02-15부터 아레나에 한국어가 공식 지원됩니다! 더 이상 본 패치는 필요하지 않습니다.</strong>
          <br>혹시 <strong>[한글폰트 패치](/arena_font_patch)</strong>를 해보시는건 어때요?
</div>

{% include toc.md %}

![kr2](/assets/images/arena/kr2.png)

<br>

# 소개
**매직 더 개더링 아레나**의 유저 한글패치입니다.

본 패치는 업데이트의 일원화를 위해 이 페이지에서만 배포됩니다. 퍼가실 때도 이 페이지를 링크해주시는 것을 권장합니다.

번역실수, 미번역 및 버그 제보 받습니다.

<br><br><br>

------------------------------------

# **주의사항**
* 본 패치는 아레나 클라이언트를 수정합니다. 패치 적용시 이에 대한 위험을 감수하는 것으로 간주합니다.

<br>

* 덱 불러오기 기능이 작동하지 않습니다.

<br>

* <span class="emphasis"  markdown="1">아레나가 업데이트되면 **영어로 초기화되며 이전까지의 한패는 만료**</span>됩니다. **절대로 예전 패치를 다시 적용하면 안됩니다.** 새로운 패치가 나올 때까지 기다려주세요.

<br><br><br>

------------------------------------

# 패치적용방법
![패치방법](/assets/images/arena/patch1.png)

※ **롤백을 위해 패치적용 전 원본 폴더 내의 `resources.assets`, `sharedassets0.assets` 파일을 백업해둘 것.**

 1. 패치를 다운로드 받고 압축을 푼다.
 1. `modified` 폴더 내의 파일들을 그대로 복사해서 아레나 설치폴더 내의 `MTGA_Data`에 복사한다. (덮어쓸까요?라는 질문에 yes)
 1. 아레나를 실행한다.  

 * 설치폴더(기본): `C:\Program Files (x86)\Wizards of the Coast\MTGA\MTGA_Data`

<br>

## 롤백방법
 1. 백업해둔 원본 `resources.assets`와 `sharedassets0.assets` 파일을 설치폴더 원래 위치에 다시 덮어씌운다. 
 1. `TMPFontAsset` 폴더를 삭제한다.
 1. `<설치폴더>\Downloads\Data`에 있는 `data_loc_*.mtga` 파일을 삭제한다.
 1. 아레나를 다시 실행한다.
  
<br><br>

------------------------------------

# FAQ 
 * Q: 한글 폰트가 너무 후져요. 바꿀 수 없나요?
   * A: 폰트는 [UnityL10nTool](https://github.com/dmc31a42/UnityL10nTool/wiki/Home-ko-KR)이라는 솔루션을 사용해 적용하고 있습니다. 본인이 미숙하여 기본지원 폰트(Noto Sans, 나눔고딕) 외에 바꾸는 법을 모릅니다(...) 이 자리를 빌어 툴 제작자님께 감사드립니다.

 <br>
 
* Q: 덱 불러오기가 안되요.
   * A: 한글패치가 되어 있을 경우 아레나용 영어 덱리스트를 인식하지 못합니다. 수동으로 덱구성을 하셔야 합니다.
 
 <br>

 * Q: 공식 한글판은 안나오나요?
   * A: 1월 18일 "라브니카의 충성" 업데이트와 함께 한국어 데이터도 아레나 클라이언트에 포함되었습니다. 들리는 소문에 따르면 한-중-일 동시 업데이트를 위해 각을 재고 있다고 하니 기다리다보면 언젠가는 될겁니다. -> 2월에 업데이트 됐네요.

<br><br><br>

------------------------------------

# **다운로드**
 * [v190202_pre2 다운로드](https://github.com/youbeebee/MTGArena-kr/releases/download/v190202_pre2/MTGArena-kr_v190202_pre2.zip)
 
 <br>
 
 * [v190202_jp Download](https://github.com/youbeebee/MTGArena-kr/releases/download/v190202_pre2/MTGArena-kr_v190202_jp.zip): For Japanese.  
 `Option` - `Graphics` - `Locale` - Choose `Japanese`.

<br><br><br>

------------------------------------

# Change Log
### v190202_pre2
* 폰트 구성 약간 변경
* 버튼 그림자 버그, 볼드체 수정

### v190202_pre
* 2/1 아레나 업데이트 대응
* 오류로 인해 예전 방식으로 패치(언어 설정 X, 일본어 지원 X)
* 버튼 그림자 버그, 볼드체 이텔릭체 버그 다시 생김

### v190130
* 1/30 아레나 업데이트 대응

### v190128
* 마이너 업데이트
![number_font](/assets/images/arena/number_font.png)
* Font_Title 폰트를 원본 그대로 사용(생명점 등 일부 UI가 더 멋지게 보임)

### v190127_comp
* **완전 한글화 버전 릴리즈**
* 옵션에서 `한국어`와 `일본어` 선택 가능
* 버튼 그림자 버그 수정
* 텍스트 내의 **볼드체**와 *이텔릭체*가 정상적으로 표기됨

### v190124_pre
* 1/23 아레나 업데이트 대응. 카드만 우선 번역

### v190120
* 팝업 설명 중 'Afterlife' 번역이 누락되어 수정.

### v190119
* ![popup](/assets/images/arena/remind_popup.png)
* 카드에 커서를 올리면 나타나는 능력 리마인드 텍스트 팝업 번역
* 번역이 일부 누락되었던 '도빈의 명민함' '불타는 나무 부족 기물파괴자'의 텍스트 수정

### v190118
* **첫 정식 버전 릴리즈**
* '라브니카의 충성' 업데이트와 함께 아레나 클라이언트에 한국어 데이터가 포함되었습니다. 개이득!
* 내장된 한국어 데이터 기반으로 한글패치 재작성. '익살란'부터 '라브니카의 충성'까지 모든 카드 지원.
* 카드 이름에 적용되는 폰트를 나눔고딕으로 변경. 하지만 별로 달라진거같지 않다.

### v190116_pre
* **임시 버전 첫 릴리즈**
* '라브니카의 길드'까지
