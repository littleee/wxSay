const content = require('./index.ejs');
const layout = require('./../layout/html.js');
const pageConfig = {
	pageTitle: 'OneAPM - AIOps 企业 IT 智能运维管理平台 | 智能化运维方案服务商',
	description: 'OneAPM 全球卓越的 AIOps 智能化运维方案服务商，通过 AI 人工智能，帮企业快速搭建  IT 智能运维管理平台， 从而降低平均故障检测时间，提升产品和服务质量，AIOps 智能运维系统用人工智能点亮传统运维。',
	keywords: 'AIOps,智能运维,智能化运维方案,智慧运维',
	pageId: 'index'
};


module.exports = layout.init(pageConfig).run(content(pageConfig));
