import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const navListMenuItems = [
    {
        title: "Herren",
        href: "/herren",
        description: "Unsere Herrenmannschaften",
        icon: UserGroupIcon,
    },
    {
        title: "Frauen",
        href: "/frauen",
        description: "Unsere Frauenmannschaften",
        icon: UserGroupIcon,
    },
    {
        title: "Jugend",
        href: "/jugend",
        description: "Unser Jugendbereich",
        icon: UserGroupIcon,
    },
    {
        title: 'Alte Herren',
        href: '/alte-herren',
        description: 'Unsere Traditionsmannschaft',
        icon: UserGroupIcon,
    }
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, href, description }, key) => (
            <a href={href} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="paragraph" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Fußball
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="/verein"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Verein</ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="/schuetzen"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Schützen</ListItem>
            </Typography>
            <Typography
                as="a"
                href="/seifenkiste"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Seifenkiste</ListItem>
            </Typography>
            <Typography
                as="a"
                href="/darts"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Darts</ListItem>
            </Typography>
            <Typography
                as="a"
                href="/foerderverein"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Förderverein</ListItem>
            </Typography>
            <Typography
                as="a"
                href="/fanshop"
                variant="paragraph"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Fanshop</ListItem>
            </Typography>
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar shadow={false} fullWidth className="px-4 py-4 border-0 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link href="/">
                    <div className="flex">
                        <img src="/images/sv-losaurach-wappen.png" alt="SV Losaurach e. V."
                             className="h-12 self-center"/>&nbsp;
                        <Typography color="blue-gray" className="ps-2 text-lg font-bold self-center">
                            SV Losaurach
                        </Typography>
                    </div>
                </Link>
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <div className="hidden items-center gap-2 lg:flex">
                    <a href="https://www.instagram.com/sv_losaurach_1972" target="_blank" title="Instagram Seite">
                        <IconButton variant="text">
                            <i className="fa-brands fa-instagram text-lg"/>
                        </IconButton>
                    </a>
                    <a href="https://www.facebook.com/SVLosaurach1972" target="_blank" title="Facebook Seite">
                        <IconButton variant="text">
                            <i className="fa-brands fa-facebook text-lg"/>
                        </IconButton>
                    </a>
                    <a href="https://whatsapp.com/channel/0029Vb5nKoeBvvsXDaQm4G2w" target="_blank" title="WhatsApp Kanal">
                        <IconButton variant="text">
                            <i className="fa-brands fa-whatsapp text-lg"/>
                        </IconButton>
                    </a>
                </div>
                <IconButton
                    variant="text"
                    color="gray"
                    className="ml-auto lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2}/>
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                    <NavList/>
                    <div className="mt-6 mb-4 flex items-center gap-2">
                        <a href="https://www.instagram.com/sv_losaurach_1972" target="_blank">
                            <IconButton variant="text">
                                <i className="fa-brands fa-instagram text-lg"/>
                            </IconButton>
                        </a>
                        <a href="https://www.facebook.com/SVLosaurach1972" target="_blank">
                            <IconButton variant="text">
                                <i className="fa-brands fa-facebook text-lg"/>
                            </IconButton>
                        </a>
                    </div>
                </div>
            </Collapse>
        </Navbar>
);
}
