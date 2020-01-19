// This file is created by 12 egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import '12 egg-onerror';
import '12 egg-session';
import '12 egg-i18n';
import '12 egg-watcher';
import 'egg-multipart';
import '12 egg-security';
import '12 egg-development';
import '12 egg-logrotator';
import '12 egg-schedule';
import '12 egg-static';
import '12 egg-jsonp';
import 'egg-view';
import { EggPluginItem } from 'egg';

declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
  }
}
