export class Constants {
  public static GENERAL = {
    GA_TRACKING_ID: "UA-150439015-2",
  };
  public static projectDashboard = [
    {
      projectName: "MOONRIVER STAKING - NOMINATORS",
      iframeURL:
        "https://analytics.dapplooker.com/public/dashboard/0c080e2d-991a-4d60-b68e-3761a3b2ba45",
    },
    {
      projectName: "MOONRIVER STAKING - COLLATORS",
      iframeURL:
        "https://analytics.dapplooker.com/public/dashboard/7dfc5a6e-da33-4d54-94bf-0dfa5e6843cb",
    },
  ];
  public static URLs = {
    TWITTER_ID: "dapplooker",
    S3_BASE_URL: "//dapplooker.s3.amazonaws.com",
    // CLOUDFRONT_BASE_URL: "https://duhy7tdvrc6v6.cloudfront.net",
    CLOUDFRONT_BASE_URL: "https://d2yxqfr8upg55w.cloudfront.net", //dapplooker cloundfront url
    DEMO_ANALYTICS_DASHBOARD: "https://dashboard.dapplooker.com/livepeer",
    SOCIAL_NETWORK_TWITTER: "https://twitter.com/dapplooker",
    DISCORD: "https://discord.gg/FWyNJtEyxa",
    MEDIUM_BLOG: "https://dapplooker.medium.com/",
    DOCS: "https://docs.dapplooker.com",
    CALENDLY_URL: "https://calendly.com/dapplooker/schedule",
    ONBOARDING_GOOGLE_FORM: "https://forms.gle/7qe2fGvoXHhWc1Vx9",
    dapplookerDocs: "https://docs.dapplooker.com/",
    JOBS: "https://hasjob.co/dapplooker.com",
    ABOUTUS:
      "https://docs.google.com/presentation/d/1hUxlumY1XNot8FEjDn0CXK9z-5SzWMlqvq258Dzbuq8/edit#slide=id.p",
  };
  public static urlQuery = {
    collator: "?input_collator_address=",
    nominator: "?input_nominator_address=",
  };
  public static queryParamName = {
    nominator: "input_collator_address",
    collator: "input_nominator_address",
  };
  public static queryRoutes = {
    collator: "/collator",
    nominator: "/nominator",
  };
  public static LABELS = {
    commonLables: {
      feedbackfromCustomers: "Feedback from Customers",
      features: "FEATURES",
      demo: "DEMO",
      explorer: "EXPLORER",
      integration: "INTEGRATION",
      pricing: "PRICING",
      contact: "CONTACT",
      technicalErrorMessage: "There is some technical issue, please try later.",
      termsOfService: "Terms of Service",
      privacy: "Privacy",
      space: "&nbsp;",
      dash: "-",
      FIFTYMB: 50000000, // 50mb
      FIVEMB: 5250000, // 5MB,
      IMAGETYPEALLLOWED: ["png", "jpeg", "jpg"],
      MAINNET: "MAINNET",
      etherscanUrl: "https://etherscan.io/address/",
      SMART_CONTRACT: "SMART_CONTRACT",
      EXTERNAL_SUBGRAPH: "EXTERNAL_SUBGRAPH",
      comingSoon: "COMING SOON",
      needHelpLabel: "NEED HELP?",
      emailNotConfirmedText:
        "Your account is not verified yet. Please check your inbox and verify your email.",
      new: "NEW",
    },
    headerArea: {
      logoText: "Dapplooker",
      headerLink1: "Explorer",
      headerLink2: "Integration",
      headerLink3: "Analyzer",
      headerLink4: "Pricing",
      headerLink5: "Resources",
      headerLink6: "Login",
      headerLink7: "Signup",
      headerLink8: "My Project",
      headerLink9: "Create a Chart",
      headerLink10: "Browse",
      headerLink11: "Features",
      headerLink12: "Browse Data",
      resourceSubHeaderLink1: "Blog",
      resourceSubHeaderLink2: "Documentaion",
      resourceSubHeaderLink3: "Contact Us",
      resourceSubHeaderLink4: "FAQ",
      userLinksSubHeaderLink1: "My Activity",
      userLinksSubHeaderLink2: "Docs",
      userLinksSubHeaderLink3: "Need Help?",
      userLinksSubHeaderLink4: "Logout",
      userLinksSubHeaderLink5: "FAQ",
    },
    footerArea: {
      footerHeader1: "Our Mission",
      loggedInfooterHeader1: "Join Us",
      footerDescription1:
        "We aim to empower everyone to easily understand smart contract data, do analytics and easily build beautiful charts and dashboards.",
      copyright1: "Copyright",
      copyright2: "Dapplooker Inc",
      copyright3: ". All rights reserved",
      footerHeader2: "Our Newsletter",
      footerDescription2:
        "Join our mailing list and stay updated with technology updates, community resources and more!",
      emailValidationErrorMsg:
        "Ahh...Invalid Email. Please enter correct email id.",
      footerHeader3: "Join us",
      termsAndCondition: "Terms And Condition",
      privacyPolicy: "Privacy Policy",
      allRightsReservedText1: "2020 Dapplooker Inc.",
      allRightsReservedText2: "- All Rights Reserved",
      link1: "Home",
      link2: "Integration",
      link3: "Explorer",
      link4: "Features",
      link5: "Privacy policy",
      link6: "FAQ",
      link7: "Integration",
      link8: "Browse",
      link9: "About Us",
      service1: "Blog",
      service2: "Contact",
      service3: "Privacy",
      service4: "Jobs",
      service5: "Graphic Design",
    },
    errorMessages: {
      email: "Please enter correct email",
      name: "please enter a correct name",
      password: "Password is too short, length must be minimum 8 characters",
      loginPagePassword: "Please enter correct passoword",
      termsAndCondition:
        "Please check the terms and condition checkbox to proceed",
      formInvalid: "Please complete the form",
      technicalError: "There is some technical issue",
      inValidContractAddress:
        "Invalid contract address, Please add a valid contract address.",
      contractAddressExists: "contract address already exists.",
      errorCode: "404",
      errorMsg: "OOPS! we are sorry, but the page you requested was not found",
      goHome: "GO HOME",
      contactUs: "CONTACT US",
      inValidUrl: "Invalid URL",
      projectName: "please enter a correct project name",
      invalidProtocol: "please select a protocol",
      invalidNetwork: "please select a network",
      NoContractAddressAdded: "add atleast one contract address.",
      fileSizeMax5Mb: "File size exceeds limit, maximum 5 MB allowed",
      fileSizeMax50Mb: "File size exceeds limit, maximum 50 MB allowed",
      allowedImageType: "only image(PNG, JPEG, JPG) are allowed",
      allowedAbisFileTypeMsg: "only json file allowed",
      invalidSubgraphEndpoint: "invalid Subgraph Endpoint",
    },
  };
}
