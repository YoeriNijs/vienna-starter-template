import {vComponentFactory, VTestComponent} from "vienna-ts";
import {HomeComponent} from "../home.component";

describe('HomeComponent', () => {

    beforeAll(() => {
        // We do not want to execute the real component timers. Since this helper method is global, it may leak to
        // other tests as well. Therefore, this method is not set in the Vienna framework and, thus,
        // we have to clean it up ourselves.
        jest.useFakeTimers()
    });

    afterAll(() => jest.useRealTimers());

    let component: VTestComponent<HomeComponent>;

    beforeEach(() => {
        const createComponent = vComponentFactory<HomeComponent>({ component: HomeComponent });
        component = createComponent();
    });

    it('should compile', () => {
        expect(component).toBeDefined();
    });

    it('should have valid html', () => {
        expect(component.html).toEqual('<span>Hello from HomeComponent!</span>');
    });

    it('should have one span', () => {
        expect(component.queryAll('span')).toHaveLength(1);
    });
});
