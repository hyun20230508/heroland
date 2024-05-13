const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

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
];

const uuidList = blackList.map((item) => {
    return item.uuid;
});