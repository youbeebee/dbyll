---
layout: post
title:  "매직 더 개더링 아레나 - 한글패치 공개"
categories: [arena]
tags: [arena, korean]
comments: true
description: MTG Arena - Korean language patch
---

![kr1](/assets/images/arena/kr1.png)

## <설명>
**매직 더 개더링 아레나**의 비공식 유저 한글패치입니다.

카드 텍스트를 번역하는 것을 목표로 하며, UI 번역은 하지 않았습니다.

본 한글패치는 업데이트의 일원화를 위해 이 페이지에서만 배포됩니다. 퍼가실 때도 이 페이지를 링크해주시는 것을 권장합니다.

## <주의사항>
 * 본 패치는 아레나 클라이언트를 직접 수정합니다. 패치 적용시 이에 대한 위험을 감수하는 것으로 간주합니다.
 * 아레나의 폰트가 기존의 Belaren체에서 NotoSans체로 변경됩니다.
 * **덱 Export 및 Import 기능이 제대로 동작하지 않게 됩니다.** 수동으로 덱빌딩을 하셔야 합니다.
 * 아레나가 업데이트되면 **전체가 다시 영어로 초기화**될 수 있습니다. 이런 경우 롤백 후 새로운 패치가 나올 때까지 기다려주세요.
 * 번역실수, 미번역 및 버그 제보는 본인에게 해주세요.

## <패치적용방법>
![패치방법](/assets/images/arena/patch1.png)
※ **롤백을 위해 패치적용 전 원본 폴더 내의 `resources.assets`와 `sharedassets0.assets` 파일을 다른 곳에 백업해둘 것.**

 1. 아래 링크에서 패치를 다운로드받는다.
 1. 압축을 푼 뒤 `modified` 폴더 내의 파일을 그대로 복사해서 아레나 설치폴더 내의 `MTGA_Data`에 복사한다. (덮어쓸까요?라는 질문에 yes)
 1. 아레나를 실행한다.

 * 설치폴더(기본): `C:\Program Files (x86)\Wizards of the Coast\MTGA\MTGA_Data`

## <롤백방법>
 1. 백업해둔 원본 `resources.assets`와 `sharedassets0.assets` 파일을 설치폴더에 다시 덮어씌운다. 
 1. `TMPFontAsset` 폴더를 삭제한다.
 1. `<설치폴더>\Downloads\AssetBundle`에 있는 `data_loc_*.mtga` 파일을 삭제한다.
 1. 아레나를 다시 실행한다.

## 다운로드
 * [v190116_pre 다운로드](https://github.com/youbeebee/MTGArena-Kor/releases/download/v190116_pre/MTGArena-KR_v190116_pre.zip)

이 버전은 1월 18일에 예정된 아레나 업데이트 이후엔 작동을 안할 확률이 높습니다. 정식 버전을 기다려주세요.

## Change Log
### 190116
* 임시 버전 첫 릴리즈(v190116_pre)

### 190115
* 스크립트로 익살란부터 길라브까지 카드 정보 긁어와서 적용
* 기타 번역 마무리

### 190113
* json으로 포맷 이동
* 생물타입 번역 진행중

### 190109
* 이름 번역 테스트
* 기본대지 타입 한글화 테스트

### 190108
* 스플릿카드 테스트: 색출//종극
* "Draw a Card." 문구 번역

### 190107
* 카드 번역 테스트: 아단토 선봉대, 은혜의 기사
* 키워드 능력 번역 테스트
* 생물을 제외한 서브타입 번역
* 플레인즈워커 카드 테스트: 도미나리아의 영웅 테페리
* 서사시 카드 테스트: 베날리아의 역사
* 플레이버 텍스트 테스트: Ajani's Welcome 등
