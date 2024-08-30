// 规则
var rules = [
    // 自定义规则
    "DOMAIN-SUFFIX,steamstatic.com,🚀 节点选择",
    "DOMAIN-SUFFIX,steampowered.com,🚀 节点选择",
    "DOMAIN-SUFFIX,steamcontent.com,🚀 节点选择",
    "DOMAIN-SUFFIX,steamusercontent.com,🚀 节点选择",
    "DOMAIN-SUFFIX,steamcommunity.com,🚀 节点选择",
    "DOMAIN-SUFFIX,steamserver.net,🚀 节点选择",
    "DOMAIN-SUFFIX,googleapis.com,♻️ 自动选择-私有节点",
    "DOMAIN-SUFFIX,googlevideo.com,♻️ 自动选择-私有节点",
    "DOMAIN-SUFFIX,github.com,🚀 节点选择",
    "DOMAIN,clash.wiki,🚀 节点选择",
    "DOMAIN,google.com,🚀 节点选择",
    "DOMAIN-SUFFIX,googleadservices.com,♻️ 自动选择-私有节点",
    "DOMAIN-SUFFIX,youtube-nocookie.com,🚀 节点选择",
    "DOMAIN-SUFFIX,tuna.tsinghua.edu.cn,🎯 全球直连",
    "PROCESS-NAME,fdm.exe,🎯 全球直连",
  ];
  
  
  // 程序入口
  function main(config) {
    console.log("hello")
    // config["rule-providers"] = ruleProviders;
    var old_rules = config["rules"]
    var new_rules = rules.concat(old_rules)
    config["rules"] = new_rules;
  
    return config;
  }
  