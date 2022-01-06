const riskFactors = ["Low", "Moderate", "High", "Very High"];
 
export default class SIP {
  constructor(json_obj) {
    this.id = json_obj.id;
    this.name = json_obj.name;
    this.category = json_obj.category;
    this.risk = riskFactors[json_obj.risk];
    this.logo = json_obj.logo;
    this.oneM = json_obj["1M"];
    this.sixM = json_obj["6M"];
    this.oneY = json_obj["1Y"];
    this.threeY = json_obj["3Y"];
    this.all = json_obj.All;
    this.currentPrice = json_obj.currentPrice;
    this.minSIP = json_obj.minSIP;
    this.fundSize = json_obj.fundSize;
    this.rating = json_obj.rating;
    this.expRatio = json_obj.expRatio;
    this.exitLoad = json_obj.exitLoad;
    this.stampduty = json_obj.stampduty;
    this.tax = json_obj.tax;
    this.equitySectorAllocation = new EquityAllocation(
      json_obj.equitySectorAllocation
    );
  }
}

class EquityAllocation {
  constructor(data) {
    this.tech = data.tech;
    this.services = data.services;
    this.communication = data.communication;
    this.others = data.others;
  }
}
