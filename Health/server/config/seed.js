/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';

var Thing = sqldb.Thing;
var User = sqldb.User;
var Post = sqldb.Post;

Post.sync()
  .then(() => {
    return Post.destroy({
      where: {}
    });
  })
  .then(() => {
    Post.bulkCreate([{
      title: '中国民间偏方大全 六大偏方可快速止咳',
      description: '在日常生活中，很多人在平时难免会因为感冒等因素而引发咳嗽的症状出现，事实上，一些民间常用的偏方，也是人们在对止咳的方法进行寻找的时候最常采用的方式，为此，本文特为大家介绍六种可快速止咳的偏方。',
      content: '[方1] 紫苏、杏仁、生姜、红糖各lO克。将紫苏与杏仁捣成泥，生姜切片共煎，取汁去渣，调入红糖再稍煮片刻，令其溶化，日分2--3次饮用。 本方散风寒，止咳嗽，对外感风寒引起的咳嗽有效。 [方2] 生姜10克，饴糖适量。将生姜洗净，切丝，放人瓷杯内，用滚开水冲泡，加盖温浸10分钟，再加入饴糖适量，代茶频频饮服，不拘时间和次数，无须出汗。 本方适用于风寒咳嗽。 [方3] 葱白5—10节，淡豆豉10克，苏梗或陈皮3克，红糖适量。将葱洗净，取葱白，与淡豆豉、陈皮等人砂锅共煎取汁，再调入红糖。日分数次，酌量饮用。 本方适用于风寒咳嗽。',
      author: 'Walker',
      category: '中医',
      createDate: '20160326',
      publishDate: '20160326',
      status: 2
    }, {
      title: '起床后先刷牙还是先喝水',
      description: '在日常生活中，很多人在平时难免会因为感冒等因素而引发咳嗽的症状出现，事实上，一些民间常用的偏方，也是人们在对止咳的方法进行寻找的时候最常采用的方式，为此，本文特为大家介绍六种可快速止咳的偏方。',
      content: '[方1] 紫苏、杏仁、生姜、红糖各lO克。将紫苏与杏仁捣成泥，生姜切片共煎，取汁去渣，调入红糖再稍煮片刻，令其溶化，日分2--3次饮用。 本方散风寒，止咳嗽，对外感风寒引起的咳嗽有效。 [方2] 生姜10克，饴糖适量。将生姜洗净，切丝，放人瓷杯内，用滚开水冲泡，加盖温浸10分钟，再加入饴糖适量，代茶频频饮服，不拘时间和次数，无须出汗。 本方适用于风寒咳嗽。 [方3] 葱白5—10节，淡豆豉10克，苏梗或陈皮3克，红糖适量。将葱洗净，取葱白，与淡豆豉、陈皮等人砂锅共煎取汁，再调入红糖。日分数次，酌量饮用。 本方适用于风寒咳嗽。',
      author: 'Walker',
      category: '中医',
      createDate: '20160326',
      publishDate: '20160326',
      status: 2
    }, {
      title: '能为健康加分的10个小细节',
      description: '在日常生活中，很多人在平时难免会因为感冒等因素而引发咳嗽的症状出现，事实上，一些民间常用的偏方，也是人们在对止咳的方法进行寻找的时候最常采用的方式，为此，本文特为大家介绍六种可快速止咳的偏方。',
      content: '[方1] 紫苏、杏仁、生姜、红糖各lO克。将紫苏与杏仁捣成泥，生姜切片共煎，取汁去渣，调入红糖再稍煮片刻，令其溶化，日分2--3次饮用。 本方散风寒，止咳嗽，对外感风寒引起的咳嗽有效。 [方2] 生姜10克，饴糖适量。将生姜洗净，切丝，放人瓷杯内，用滚开水冲泡，加盖温浸10分钟，再加入饴糖适量，代茶频频饮服，不拘时间和次数，无须出汗。 本方适用于风寒咳嗽。 [方3] 葱白5—10节，淡豆豉10克，苏梗或陈皮3克，红糖适量。将葱洗净，取葱白，与淡豆豉、陈皮等人砂锅共煎取汁，再调入红糖。日分数次，酌量饮用。 本方适用于风寒咳嗽。',
      author: 'Walker',
      category: '中医',
      createDate: '20160326',
      publishDate: '20160326',
      status: 2
    }]);
  });

Thing.sync()
  .then(() => {
    return Thing.destroy({ where: {} });
  })
  .then(() => {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });
