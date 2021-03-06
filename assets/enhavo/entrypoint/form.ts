import Container from "@enhavo/dependency-injection"
import '../styles/form.scss';

(async () => {
    await Container.init();
    (await Container.get('@enhavo/app/form/FormApp')).init();
    (await Container.get('@enhavo/app/vue/VueApp')).init('app', await Container.get('@enhavo/app/form/components/FormComponent.vue'));
})();
