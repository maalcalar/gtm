import Trigger from '../../common/trigger.class';

const trigger = new Trigger('page view', {}, [{type: 'url', component: 'path', condition: 'equals', value: '/movil/prepago/recargas/online'}]);

export default trigger;