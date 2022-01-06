import JSONDATA from "../../data/SIP-Data/sipListData.json";
import SIP from "./model";


export default class SIPRepository {
  get SIPList() {
    return this.fetchSIPListData();
  }

  fetchSIPListData() {
    const parsedData = JSON.parse(JSON.stringify(JSONDATA));
    const SIPList = parsedData["siplist"];
    var SIPObj;
    var SIPObjectList = [];
    for (var i = 0; i < SIPList.length; i++) {
      SIPObj = new SIP(SIPList[i]);
      SIPObjectList.push(SIPObj);
    }
    return SIPObjectList;
  }
}
