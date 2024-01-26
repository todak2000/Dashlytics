import { render } from "@testing-library/react";

import ActiveSideBarIcon from "@/app/svgs/ActiveSideBarIcon";
import AnalyticsIcon from "@/app/svgs/AnalyticsIcon";
import BoxIcon from "@/app/svgs/BoxIcon";
import DarkModeIcon from "@/app/svgs/DarkModeIcon";
import DashboardIcon from "@/app/svgs/DashboardIcon";
import InfoIcon from "@/app/svgs/InfoIcon";
import LightModeIcon from "@/app/svgs/LightModeIcon";
import LogoIcon from "@/app/svgs/LogoIcon";
import OtherIcon from "@/app/svgs/OtherIcon";
import PowerIcon from "@/app/svgs/PowerIcon";
import SettingIcon from "@/app/svgs/SettingIcon";
import SettingTwoIcon from "@/app/svgs/SettingTwoIcon";
import UserIcon from "@/app/svgs/UserIcon";

describe("ActiveSideBar Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<ActiveSideBarIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Analytics Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<AnalyticsIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Box Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<BoxIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Darkmode Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<DarkModeIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Dashboard Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<DashboardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Info Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<InfoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("LightMode Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<LightModeIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Logo Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<LogoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Other Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<OtherIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Power Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<PowerIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Setting Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SettingIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Setting Two Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<SettingTwoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("User Icon", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<UserIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
