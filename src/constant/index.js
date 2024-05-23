import Funnel from "../assets/icons/Funnel.svg";
import ArrowDownCircle from "../assets/icons/ArrowDownCircle.svg";
import ClipboardDocumentList from "../assets/icons/ClipboardDocumentList.svg";
import CloudArrowUp from "../assets/icons/CloudArrowUp.svg";
import PaperClip from "../assets/icons/PaperClip.svg";
import AtSymbol from "../assets/icons/AtSymbol.svg";

export const TableHeaders = [
  "Index",
  "DVC Code",
  "Company Name",
  "Business Nature",
  "Business Sector",
  "Business Industry",
  "Listed",
  "Legal Status",
  "User Key",
  "Username",
  "Firm Key",
  "Firm Name",
  "Service Catagory",
  "Service Name",
  "Document Date",
  "Document",
  "Reference Law",
  "DVC Date",
  "Month",
  "Day",
  "Year",
];

/* audit_opinion: "Unqualified";
auditor_name: "Audit Firm A";
cash_flow_financing: -200000;
cash_flow_investing: -100000;
cash_flow_operations: 300000;
company_name: "ABC Corp";
country: "USA";
earnings_per_share: 5.5;
filing_date: "2023-04-30";
fiscal_year: 2023;
gross_profit: 500000;
id: 1;
net_income: 200000;
operating_expense: 300000;
report_date: "2023-03-31";
report_id: "RPT001";
sector: "Technology";
shareholders_equity: 1000000;
total_assets: 1500000;
total_liabilities: 500000;
total_revenue: 1000000; */

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "Page 1" },
  { href: "#products", label: "Page 2" },
  { href: "#contact-us", label: "Page 3" },
];

export const navigation = [
  {
    name: "Filter",
    href: "#",
    current: true,
    icon: Funnel,
  },
  {
    name: "Dashboard",
    href: "#",
    current: false,
    icon: ArrowDownCircle,
  },
  {
    name: "Data Upload",
    href: "#",
    current: false,
    icon: CloudArrowUp,
  },
  {
    name: "Entity Tracking",
    href: "#",
    current: false,
    icon: PaperClip,
  },
  {
    name: "Report Generation",
    href: "#",
    current: false,
    icon: ClipboardDocumentList,
  },
  {
    name: "About",
    href: "#",
    current: false,
    icon: AtSymbol,
  },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
