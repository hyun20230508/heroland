const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
let title = document.getElementById('black-list-h5');

searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        searchUuid();
    }
  });

searchButton.addEventListener('click', () => {
    searchUuid();
})

const searchUuid = () => {
    console.log(uuidList)
    const index = uuidList.findIndex((item) => {
        return item === searchInput.value;
    });
    if (index !== -1) {
        searchInput.value = '';
        alert(`Black List에 해당 uuid가 존재합니다.\nuuid: ${blackList[index].uuid}\nmemo: ${blackList[index].memo}`);
    } else {
        searchInput.value = '';
        alert('BlackList에 존재하지 않습니다.');
    }
}

// Black List 목록
const blackList = [
    { uuid: 'hgTVLh9n', memo: '패드립' },
    { uuid: 'ItNjcIUB', memo: '사유 모름\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: 'ltNjclUB', memo: '사유 모름\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: '7cJDbccd', memo: '사유 모름' },
    { uuid: 'DIs79rkT', memo: '사유 모름\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: 'Dls79rkT', memo: '사유 모름\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: 'ZNy6Qwpm', memo: '얼망으로 보스템 스틸' },
    { uuid: 'SlfHCjG4', memo: '사기꾼\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: 'SIfHCjG4', memo: '사기꾼\n(uuid l/I 혼동 가능성 있음)' },
    { uuid: '5nYpJARK', memo: '얼망으로 보스템 스틸' },
    { uuid: 'xv5LHIXM', memo: '서궤부 사기꾼' },
    { uuid: 'zFaj3Tw5', memo: '나는재형이 마검쩔 사기' },
    { uuid: 'b8ujmfRM', memo: '필 마검쩔 사기' },
    { uuid: 'quhzXVJ2', memo: '-LOVE- 마검쩔 사기' },
    { uuid: 'tKafnh29', memo: '돌고래 임티, 카페길드에서 사고침' },
    { uuid: 'KfIU6mTH', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: '2QNUA5Zz', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'tFrEMFIE', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'SlfHCjG4', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'IdFSRMUt', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: '3lm2GaBs', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'siPV3jLB', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'Rhxw4bKt', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'l8pgmuhK', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'SIfHCjG4', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'SnWnrf8M', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'EcZxrLmF', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'Wsk4ne8Z', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'gWDDAhVi', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'cCIjbIE7', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'stfhGwfZ', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: '8W4i6Xel', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'hFlWrLB1', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'rJRQDVlv', memo: '사유 모름 / 기존 Black List 제보' },
    { uuid: 'lVt799CK', memo: '닌자 1대1 아이템 내기 지고 도망침' },
    { uuid: 'P55MV4FB', memo: '닌자 1대1 아이템 내기 지고 도망침' },
    { uuid: 'wfwHmwzF', memo: '지존반 4개 사기' },
    { uuid: 'dJYCYju7', memo: '황금 반지 사기' },
    { uuid: 'Crsz9vlr', memo: '699스킨 사기, Demon_1' },
    { uuid: '54FFSYg8', memo: '클로버 팬던트 사기, CMK' },
    { uuid: '9hAnZP24', memo: '서다반 사기 타유저 사칭범, 기특한치타' },
    { uuid: 'tztFQjbd', memo: '서다반 사기' },
    { uuid: 'mALNhyvz', memo: '서궤부, 서다반 사기(슬라임 얼망)' },
];

const blackListLength = blackList.length;
console.log(`Black List ${blackListLength}명 유지 중`)

title.textContent = `Black List: ${blackListLength}명 유지 중`

const uuidList = blackList.map((item) => {
    return item.uuid;
});