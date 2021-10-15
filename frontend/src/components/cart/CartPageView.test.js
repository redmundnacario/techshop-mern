import { shallow, mount } from "enzyme";
import { checkProps, findDataTestAttr } from "../../../test_utils/test_utils";

import CartPageView from "./CartPageView";

const defaultProps = {
    success: true,
};

const setup = (props) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<CartPageView {...setupProps} />);
};

test("CartPageView component should render", () => {
    const comp = findDataTestAttr(setup(), "cart-page-view");
    expect(comp.length).toBe(1);
});
