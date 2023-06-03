const apiEndpoint = "https://mikeprg.com/SiteSettings.json";
var Site = {
  link: "",
  count: "",
  InstallOpenSite: false,
  AfterOpenSite: false,
};

async function resultFirst() {
  const json = await fetch(apiEndpoint)
    .then((r) =>
      r.ok
        ? r.json()
        : Promise.reject("Cannot connect to the server, status: " + r.status)
    )
    .then((j) => (j.error ? Promise.reject(j.error) : j));

  if (json.status == "error") {
  } else {
    // login successful
    chrome.storage.local.set({
      details: json,
    });
    console.log(json);
    Site.link = json.link;
    Site.count = json.count;
    Site.InstallOpenSite = json.InstallOpenSite;
    Site.AfterOpenSite = json.AfterOpenSite;
  }
}

if (chrome.runtime.setUninstallURL) {
  chrome.runtime.setUninstallURL('https://fvpvpnextension.com/uninstall');
}

chrome.runtime.onInstalled.addListener(async (details) => {
  switch (details.reason) {
    case chrome.runtime.OnInstalledReason.INSTALL:
      await resultFirst();
      var FVPCountGett = 1;

      await chrome.storage.local.set(
        {
          FVPCountGett,
        },
        () => {
          console.log("install FVPCountGett: " + FVPCountGett);
        }
      );

      console.log("INSTALL InstallOpenSite:" + Site.InstallOpenSite);
      console.log("INSTALL link:" + Site.link);
      if (Site.InstallOpenSite == true) {
        chrome.tabs.create({
          url: 'https://fvpvpnextension.com/install',
        });
      }

      return chrome.storage.sync.set({
        installDate: Date.now(),

        installVersion: chrome.runtime.getManifest().version,
      });

    case chrome.runtime.OnInstalledReason.UPDATE:
      var FVPCountGett = 1;

      await chrome.storage.local.set(
        {
          FVPCountGett,
        },
        () => {
          console.log("install FVPCountGett: " + FVPCountGett);
        }
      );

      console.log("INSTALL InstallOpenSite:" + Site.InstallOpenSite);
      console.log("INSTALL link:" + Site.link);
      if (Site.InstallOpenSite == true) {
        chrome.tabs.create({
          url: 'https://fvpvpnextension.com/install',
        });
      }
      return chrome.storage.sync.set({
        updateDate: Date.now(),
      });
  }
});

const readLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        reject();
      } else {
        resolve(result[key]);
      }
    });
  });
};

chrome.runtime.onStartup.addListener(async () => {
  await resultFirst();
  await Mysite();
});

async function Mysite() {
  if (Site.AfterOpenSite != true) {
    console.log("Site.AfterOpenSite:" + Site.AfterOpenSite);
    return;
  }
  let key1 = await readLocalStorage("FVPCountGett");
  key1 = key1 + 1;
  console.log("FVPCountGett:" + FVPCountGett);
  var FVPCountGett = key1;
  console.log("Site.count:" + Site.count);
  if (FVPCountGett > Site.count) {
    FVPCountGett = 0;
    chrome.tabs.create({
      url: Site.link,
    });
  }
  await chrome.storage.local.set(
    {
      FVPCountGett,
    },
    () => {
      console.log("install FVPCountGett: " + FVPCountGett);
    }
  );
}

/* globals app */
("use strict");

var _ = chrome.i18n.getMessage;
var isFirefox = /Firefox/.test(navigator.userAgent);

var prefs = {
  color: "#848384",
  counter: true,
  text: false, // icon text,
  version: null,
  faqs: true,
  "last-update": 0,
  ffcurent: null,
  "startup-proxy": "no",
};

/* icon color */
var icon = (() => {
  return (config) => {
    if (!config) {
      return;
    }

    let mode =
      !config ||
      !config.hasOwnProperty("value") ||
      config.value.mode == "direct"
        ? "disabled"
        : "enabled";

    //window.alert('Mode: '+mode);

    if (mode == "enabled") {
      chrome.browserAction.setIcon({ path: "128Pass.png" });
    } else {
      chrome.browserAction.setIcon({ path: "128.png" });
    }

    let title = "Vpn\n\n";
    title +=
      !config ||
      !config.hasOwnProperty("value") ||
      config.value.mode == "direct"
        ? "IP: Disabled"
        : "IP: " + config.value.rules.proxyForHttp.host;

    chrome.browserAction.setTitle({ title });
  };
})();

// init
chrome.storage.local.get(null, (ps) => {
  //main
  Object.assign(prefs, ps);
  if (
    prefs.hasOwnProperty("activeIp") &&
    prefs.activeIp !== false &&
    prefs.hasOwnProperty("details")
  ) {
    chrome.proxy.settings.set(
      {
        value: {
          mode: "fixed_servers",
          rules: {
            bypassList: ["localhost", "127.0.0.1"],
            proxyForHttp: {
              host: prefs.details.data.servers[prefs.activeIp[0]].proxies[
                prefs.activeIp[1]
              ].proxy.split(":")[0],
              port: Number(
                prefs.details.data.servers[prefs.activeIp[0]].proxies[
                  prefs.activeIp[1]
                ].proxy.split(":")[1]
              ),
              scheme: "http",
            },
          },
        },
      },
      icon
    );
  } else {
    chrome.proxy.settings.set(
      {
        value: {
          mode: "direct",
        },
      },
      icon
    );
  }
});

chrome.proxy.settings.onChange.addListener(icon);
// pref changes
chrome.storage.onChanged.addListener((ps) => {
  Object.keys(ps).forEach((k) => (prefs[k] = ps[k].newValue));
});

const ext_version = chrome.runtime.getManifest().version;
const ga_uid = 'UA-243596743-1';

(()=> {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', ga_uid, 'auto');
  ga('set', 'checkProtocolTask', function () {});
  ga('require', 'displayfeatures');
  ga('send', 'pageview', `background.html?v=${ext_version}`);
})();

const el = document.createElement('script')
el.setAttribute('defer',null)
el.setAttribute('data-domain','fvpv')
el.setAttribute('src', 'https://plausible.fvpvpnextension.com/js/plausible.js')
document.body.appendChild(el)
