import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_pblog.handsomecoder.com';

  // add your egg config in here
  config.middleware = [];

  //mongodb配置
  config.mongo = {
    client: {
      host: "127.0.0.1",
      port: "27017",
      name: "pblog",
      user: "root",
      password: "root",
      options: {},
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
