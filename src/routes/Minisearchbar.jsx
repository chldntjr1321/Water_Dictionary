import { useState } from 'react';
import {
  data_ko_ga,
  data_ko_na,
  data_ko_da,
  data_ko_ra,
  data_ko_ma,
  data_ko_ba,
  data_ko_sa,
  data_ko_a,
  data_ko_ja,
  data_ko_ca,
  data_ko_ka,
  data_ko_ta,
  data_ko_pa,
  data_ko_ha,
  data_en,
  data_num,
} from '../datas';
import Card from '../components/Card';

function Minisearchbar({ index }) {
  let [inputValue, setInputValue] = useState('');
  let [matchedResults, setMatchedResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const searchText = (e) => {
    setInputValue(e.target.value);
    setIsSearched(false);
  };
  function indexCheck(idx) {
    let targetData;
    switch (idx) {
      case 0:
        targetData = data_ko_ga;
        break;
      case 1:
        targetData = data_ko_na;
        break;
      case 2:
        targetData = data_ko_da;
        break;
      case 3:
        targetData = data_ko_ra;
        break;
      case 4:
        targetData = data_ko_ma;
        break;
      case 5:
        targetData = data_ko_ba;
        break;
      case 6:
        targetData = data_ko_sa;
        break;
      case 7:
        targetData = data_ko_a;
        break;
      case 8:
        targetData = data_ko_ja;
        break;
      case 9:
        targetData = data_ko_ca;
        break;
      case 10:
        targetData = data_ko_ka;
        break;
      case 11:
        targetData = data_ko_ta;
        break;
      case 12:
        targetData = data_ko_pa;
        break;
      case 13:
        targetData = data_ko_ha;
        break;
      case 14:
        targetData = data_num;
        break;
      case 15:
        targetData = data_en;
        break;
      default:
        targetData = [];
    }
    const matches = targetData.filter((data) => data.hNm === inputValue);
    setMatchedResults(matches);
    setIsSearched(true);
  }

  return (
    <>
      <div className="searchbox">
        <input
          type="search"
          placeholder="페이지 내 검색"
          value={inputValue}
          onChange={searchText}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              indexCheck(index);
            }
          }}
        />
        <span
          onClick={() => {
            indexCheck(index);
          }}
          className="searchicon"
        >
          🔍
        </span>
      </div>
      <div className="result-area">
        {isSearched &&
          (matchedResults.length > 0 ? (
            matchedResults.map((data, i) => <Card data={data} key={i} />)
          ) : (
            <p>검색하신 단어와 일치하는 결과가 없습니다!</p>
          ))}
      </div>
    </>
  );
}

export default Minisearchbar;
