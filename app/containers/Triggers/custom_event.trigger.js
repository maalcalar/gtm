import Trigger from '../../common/trigger.class';

const trigger = new Trigger('custom event', {}, [{type: 'url', component: 'path', condition: 'contains', value: 'gtm'}]);
trigger.event = 'atm.test.event';

export default trigger;