const customRules = [
    // 在此添加自定义代理规则。
    // 例如：
    //"DOMAIN-SUFFIX,gstatic.com,节点选择",
];

// 默认测试网址
const test_url = "http://www.google.com/generate_204";
// 测试网址检测间隔
const test_interval = 240;
// 测试网址的间隔差值，超过这个差值就会切换节点，越小切换越频繁
const test_tolerance = 80;

// 国内DNS服务器,只写最快的一个，写多了会导致访问速度变慢和内核内存占用变大
const domesticNameservers = [
    "tls://223.5.5.5", // 阿里云公共DNS
];
// 国外DNS服务器，同上
const foreignNameservers = [
    "tls://dns.opendns.com", // OpenDNS
];

// 规则集通用配置
const ruleProviderCommon = {
    type: "http",
    format: "mrs",
    interval: 86400,
};

// 代理组通用配置
const groupBaseOption = {
    "interval": 300,
    "timeout": 3000,
    "url": test_url,
    "lazy": true,
    "hidden": false,
    "disable-udp": false,
};

// 代理规则 - 简化为：直连规则保持直连，其他所有规则都指向"代理选择"
const rules = [
    // 自定义规则
    ...customRules,
    // 规则集
    "RULE-SET,ipdirect,全局直连,no-resolve",
    "RULE-SET,ipprivate,全局直连,no-resolve",
    "RULE-SET,direct,全局直连",
    "RULE-SET,private,全局直连",
    "RULE-SET,bilibili,全局直连",
    "RULE-SET,speedtest,全局直连",
    // 以下所有规则都指向"代理选择"
    "RULE-SET,telegramcidr,代理选择,no-resolve",
    "RULE-SET,google,代理选择",
    "RULE-SET,apple,代理选择",
    "RULE-SET,bing,代理选择",
    "RULE-SET,github,代理选择",
    "RULE-SET,onedrive,代理选择",
    "RULE-SET,microsoft,代理选择",
    "RULE-SET,adobe,代理选择",
    "RULE-SET,ai,代理选择",
    "RULE-SET,youtube,代理选择",
    "RULE-SET,netflix_ip,代理选择",
    "RULE-SET,netflix_site,代理选择",
    "RULE-SET,tiktok,代理选择",
    "RULE-SET,pornhub,代理选择",
    "RULE-SET,spotify,代理选择",
    "RULE-SET,games,代理选择",
    "RULE-SET,proxy,代理选择",
    "RULE-SET,gfw,代理选择",
    "RULE-SET,tld-not-cn,代理选择",
    // 未匹配的规则也指向"代理选择"
    "MATCH,代理选择",
];

// 规则集配置
const ruleProviders = {
    ipdirect: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs",
        path: "./ruleset/cncidr.mrs",
    },
    ipprivate: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs",
        path: "./ruleset/lancidr.mrs",
    },
    direct: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs",
        path: "./ruleset/direct.mrs",
    },
    private: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs",
        path: "./ruleset/private.mrs",
    },
    google: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google.mrs",
        path: "./ruleset/google.mrs",
    },
    microsoft: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/microsoft.mrs",
        path: "./ruleset/microsoft.mrs",
    },
    apple: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/apple.mrs",
        path: "./ruleset/apple.mrs",
    },
    bing: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bing.mrs",
        path: "./ruleset/bing.mrs",
    },
    github: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/github.mrs",
        path: "./ruleset/github.mrs",
    },
    onedrive: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/onedrive.mrs",
        path: "./ruleset/onedrive.mrs",
    },
    youtube: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
        path: "./ruleset/youtube.mrs",
    },
    pornhub: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/pornhub.mrs",
        path: "./ruleset/pornhub.mrs",
    },
    netflix_ip: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/netflix.mrs",
        path: "./ruleset/netflix-ip.mrs",
    },
    netflix_site: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/netflix.mrs",
        path: "./ruleset/netflix-site.mrs",
    },
    adobe: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/adobe.mrs",
        path: "./ruleset/adobe.mrs",
    },
    ai: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/ai.mrs",
        path: "./ruleset/ai.mrs",
    },
    bilibili: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bilibili.mrs",
        path: "./ruleset/bilibili.mrs",
    },
    tiktok: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tiktok.mrs",
        path: "./ruleset/tiktok.mrs",
    },
    spotify: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/spotify.mrs",
        path: "./ruleset/spotify.mrs",
    },
    speedtest: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/speedtest.mrs",
        path: "./ruleset/speedtest.mrs",
    },
    games: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/games-cn.mrs",
        path: "./ruleset/games.mrs",
    },
    telegramcidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/telegram.mrs",
        path: "./ruleset/telegramcidr.mrs",
    },
    proxy: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo-lite/geosite/proxy.mrs",
        path: "./rulesets/loyalsoldier/proxy.mrs",
    },
    gfw: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/gfw.mrs",
        path: "./ruleset/gfw.mrs",
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tld-!cn.mrs",
        path: "./ruleset/tld-not-cn.mrs",
    },
};


// 地区配置
const regionConfig = [
    {
        name: "🇺🇸 美国 📶",
        matcher: "美国|🇺🇸|US|United States|America",
    },
    {
        name: "🇯🇵 日本 📶",
        matcher: "日本|🇯🇵|JP|Japan",
    },
    {
        name: "🇰🇷 韩国 📶",
        matcher: "韩|🇰🇷|kr|korea",
    },
    {
        name: "🇸🇬 新加坡 📶",
        matcher: "新加坡|🇸🇬|SG|狮城|Singapore",
    },
    {
        name: "🇭🇰 香港 📶",
        matcher: "香港|🇭🇰|HK|Hong Kong|HongKong",
    },
    {
        name: "🇹🇼 台湾 📶",
        matcher: "台湾|🇹🇼|tw|taiwan|tai wan",
    },
    {
        name: "🇬🇧 英国 📶",
        matcher: "英|🇬🇧|uk|united kingdom|great britain",
    },
    {
        name: "🇫🇷 法国 📶",
        matcher: "法国|🇫🇷|FR|France",
    },
    {
        name: "🇩🇪 德国 📶",
        matcher: "德国|🇩🇪|DE|germany",
    },
    {
        name: "🇵🇱 波兰 📶",
        matcher: "波兰|🇵🇱|Poland|PL|Poland",
    },
    {
        name: "🇳🇱 荷兰 📶",
        matcher: "荷兰|🇳🇱|NL|Netherlands",
    },
    {
        name: "🇮🇪 爱尔兰 📶",
        matcher: "爱尔兰|🇮🇪|IE|Ireland",
    },
    {
        name: "🇸🇪 瑞典 📶",
        matcher: "瑞典|🇸🇪|SE|Sweden",
    },
    {
        name: "🇷🇺 俄罗斯 📶",
        matcher: "俄罗斯|🇷🇺|RU|Russia",
    },
    {
        name: "🇮🇹 意大利 📶",
        matcher: "意大利|🇮🇹|IT|Italy",
    },
    {
        name: "🇪🇸 西班牙 📶",
        matcher: "西班牙|🇪🇸|ES|Spain",
    },
    {
        name: "🇵🇹 葡萄牙 📶",
        matcher: "葡萄牙|🇵🇹|PT|Portugal",
    },
    {
        name: "🇹🇷 土耳其 📶",
        matcher: "土耳其|🇹🇷|TR|Turkey",
    },
    {
        name: "🇦🇷 阿根廷 📶",
        matcher: "阿根廷|🇦🇷|AR|Argentina",
    },
    {
        name: "🇨🇦 加拿大 📶",
        matcher: "加拿大|🇨🇦|CA|Canada",
    },
    {
        name: "🇦🇺 澳大利亚 📶",
        matcher: "澳大利亚|🇦🇺|AU|Australia",
    },
    {
        name: "🇮🇷 伊朗 📶",
        matcher: "伊朗|🇮🇷|IR|Iran",
    },
    {
        name: "🇮🇩 印度尼西 📶",
        matcher: "印度尼西亚|印尼|🇮🇩|ID|Indonesia",
    },
    {
        name: "🇲🇾 马来西亚 📶",
        matcher: "马来|🇲🇾|MY|Malaysia",
    },
    {
        name: "🇵🇭 菲律宾 📶",
        matcher: "菲律宾|🇵🇭|PH|Philippines",
    },
    {
        name: "🇮🇳 印度 📶",
        matcher: "印度|🇮🇳|IN|India",
    },
    {
        name: "🇻🇳 越南 📶",
        matcher: "越南|🇻🇳|VN|Vietnam",
    },
    {
        name: "🇹🇭 泰国 📶",
        matcher: "泰国|🇹🇭|TH|Thailand",
    },
    {
        name: "🇨🇳 中国 📶",
        matcher: "中国|🇨🇳|CN|cn|china",
    },
    {
        name: "🌐 其他 📶",
    }
];

// 显示节点配置 - 简化为统一的"代理选择"入口
const proxyGroups = [
    // 主入口：代理选择 - 所有需要代理的流量都走这里
    {
        ...groupBaseOption,
        name: "代理选择",
        type: "select",
        proxies: ["延迟选优", "故障转移", "手动选择", "负载均衡(轮询)", "负载均衡(散列)", "全局直连", "地区选择"],
    },
    // 手动选择具体节点
    {
        ...groupBaseOption,
        name: "手动选择",
        type: "select",
        "include-all": true,
    },
    // 负载均衡(轮询)
    {
        ...groupBaseOption,
        name: "负载均衡(轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
    },
    // 负载均衡(散列)
    {
        ...groupBaseOption,
        name: "负载均衡(散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
    },
    // 故障转移
    {
        ...groupBaseOption,
        name: "故障转移",
        type: "fallback",
        "include-all": true,
    },
    // 全局直连
    {
        ...groupBaseOption,
        name: "全局直连",
        type: "select",
        proxies: ["DIRECT", "REJECT"],
    },
    // 延迟选优
    {
        ...groupBaseOption,
        name: "延迟选优",
        type: "url-test",
        interval: test_interval,
        tolerance: test_tolerance,
        "include-all": true,
    },
];

// DNS配置
const dnsConfig = {
    "enable": true,
    "ipv6": true,
    "prefer-h3": false,
    "use-hosts": false,
    "use-system-hosts": true,
    "listen": "0.0.0.0:1053",
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": [
        "+.lan",
        "+.local",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
        "*.localdomain",
        "*.example",
        "*.invalid",
        "*.localhost",
        "*.test",
        "*.local",
        "*.home.arpa"
    ],
    "nameserver": [...domesticNameservers],
    "proxy-server-nameserver": [...foreignNameservers, ...domesticNameservers],
    "nameserver-policy": {},
};

// 域名嗅探
const snifferConfig = {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": true,
    "sniff": {
        "TLS": {
            "ports": [443, 8443],
        },
        "HTTP": {
            "ports": [80, "8080-8880"],
            "override-destination": true,
        },
        "QUIC": {
            "ports": [443, 8443]
        },
    }
};

// 添加地区分组
function addRegions(config) {
    let regions = [];
    if (!config.proxies) {
        if (!config["proxy-providers"]) return;
        const providers = Object.keys(config["proxy-providers"]);
        if (providers.length === 0) return;
        let exclude = "";
        for (const region of regionConfig) {
            if (!region.name) continue;
            if (region.matcher) {
                exclude += (exclude === "" ? region.matcher : `|${region.matcher}`)
                config["proxy-groups"].push({
                    ...groupBaseOption,
                    name: region.name,
                    type: "url-test",
                    interval: test_interval,
                    tolerance: test_tolerance,
                    use: providers,
                    filter: region.matcher,
                });
            } else {
                config["proxy-groups"].push({
                    ...groupBaseOption,
                    name: region.name,
                    type: "url-test",
                    use: providers,
                    interval: test_interval,
                    tolerance: test_tolerance,
                    "exclude-filter": exclude,
                });
            }
            regions.push(region.name)
        }
    } else {
        let names = config.proxies.map(p => p.name).filter(Boolean);
        if (names.length === 0) return;
        for (const region of regionConfig) {
            let proxies = [], noproxies = [];
            if (!region.matcher) {
                proxies = [...names];
                noproxies = [];
            } else {
                const matches = region.matcher.split("|");
                if (matches.length === 0) continue;
                const result = names.reduce((acc, name) => {
                    (matches.some(m => name.includes(m)) ? acc.proxies : acc.noproxies).push(name);
                    return acc;
                }, { proxies: [], noproxies: [] });
                proxies = result.proxies;
                noproxies = result.noproxies;
            }
            if (proxies.length === 0) continue;
            config["proxy-groups"].push({
                ...groupBaseOption,
                name: region.name,
                type: "url-test",
                interval: test_interval,
                tolerance: test_tolerance,
                proxies: proxies,
            });
            regions.push(region.name);
            if (noproxies.length === 0) break;
            names = noproxies;
        }
    }
    if (regions.length === 0) return;
    const entries = config["proxy-groups"];
    for (const entry of entries) {
        if (!entry || !entry.proxies) continue;
        // 将"地区选择"添加到"代理选择"组中
        if (entry.name === "代理选择") {
            if (entry.proxies.length > 1) {
                entry.proxies.splice(2, 0, "地区选择");
            }
        }
    }
    if (entries.length > 0) {
        entries.splice(1, 0, {
            ...groupBaseOption,
            name: "地区选择",
            type: "select",
            proxies: regions,
        })
    }
    config["proxy-groups"] = entries;
}

// 主函数
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }

    // 配置
    config["profile"] = {
        "store-selected": true,
        "store-fake-ip": true,
    };
    // Geo设置
    config["geodata-loader"] = "standard";
    config["geosite-matcher"] = "mph";
    // 全局客户端指纹
    config["global-client-fingerprint"] = "chrome";
    config["global-ua"] = "chrome";
    // 统一延迟
    config["unified-delay"] = true;
    // TCP 并发
    config["tcp-concurrent"] = true;
    // 域名服务
    config["foreign_nameservers"] = foreignNameservers;
    config["domestic_nameservers"] = domesticNameservers;
    // DNS配置
    // config["dns"] = dnsConfig;
    // 域名嗅探
    config["sniffer"] = snifferConfig;
    // 规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    // 代理组
    config["proxy-groups"] = proxyGroups;
    // 地区分组
    addRegions(config);
    // 返回修改后的配置
    return config;
}