import { filterUnitByBasicsUnit } from "../../unit/BasicsUnit";

function filterUnitByBasicsUjitTest() {
  const testData = [
    {
      param: ["kfdjksl"],
      return: false,
    },
    {
      param: ["1343"],
      return: false,
    },
    {
      param: ["1324px13"],
      return: false,
    },
    {
      param: ["px13"],
      return: false,
    },
    {
      param: ["13px"],
      return: true,
    },
    {
      param: ["130vh"],
      return: true,
    },
    {
      param: ["9rem"],
      return: true,
    },
    {
      param: ["9cm"],
      return: true,
    },
    {
      param: ["9rem"],
      return: true,
    },
  ];

  for (const key in testData) {
    if (Object.prototype.hasOwnProperty.call(testData, key)) {
      const element = testData[key];
      const rest = <any>element.param;
      const ret = filterUnitByBasicsUnit(rest[0]);
      if (ret !== element.return) {
        console.log(testData[key].param + "错误");
      }
    }
  }
}
filterUnitByBasicsUjitTest();
