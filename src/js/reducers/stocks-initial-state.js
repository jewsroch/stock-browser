/* eslint-disable comma-dangle */
export const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const stocks = {};

lettersArray.forEach((l) => {
  stocks[l] = [];
});

stocks.A = [
  {
    symbol: 'A',
    name: 'Agilent Technologies Inc.'
  },
  {
    symbol: 'AA',
    name: 'Alcoa Corporation'
  },
  {
    symbol: 'AAAP',
    name: 'Advanced Accelerator Applications S.A.'
  },
  {
    symbol: 'AABA',
    name: 'Altaba Inc.'
  },
  {
    symbol: 'AAC',
    name: 'AAC Holdings Inc.'
  },
  {
    symbol: 'AADR',
    name: 'AdvisorShares Dorsey Wright ADR'
  },
  {
    symbol: 'AAL',
    name: 'American Airlines Group Inc.'
  },
  {
    symbol: 'AAMC',
    name: 'Altisource Asset Management Corp Com'
  },
  {
    symbol: 'AAME',
    name: 'Atlantic American Corporation'
  },
  {
    symbol: 'AAN',
    name: 'Aaron\'s Inc.'
  },
  {
    symbol: 'AAOI',
    name: 'Applied Optoelectronics Inc.'
  },
  {
    symbol: 'AAON',
    name: 'AAON Inc.'
  },
  {
    symbol: 'AAP',
    name: 'Advance Auto Parts Inc W/I'
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.'
  },
  {
    symbol: 'AAT',
    name: 'American Assets Trust Inc.'
  },
  {
    symbol: 'AAU',
    name: 'Almaden Minerals Ltd.'
  },
  {
    symbol: 'AAV',
    name: 'Advantage Oil & Gas Ltd'
  },
  {
    symbol: 'AAWW',
    name: 'Atlas Air Worldwide Holdings'
  },
  {
    symbol: 'AAXJ',
    name: 'iShares MSCI All Country Asia ex Japan Index Fund'
  },
  {
    symbol: 'AAXN',
    name: 'Axon Enterprise Inc.'
  },
  {
    symbol: 'AB',
    name: 'AllianceBernstein Holding L.P. Units'
  },
  {
    symbol: 'ABAC',
    name: 'Renmin Tianli Group Inc.'
  },
  {
    symbol: 'ABAX',
    name: 'ABAXIS Inc.'
  },
  {
    symbol: 'ABB',
    name: 'ABB Ltd'
  },
  {
    symbol: 'ABBV',
    name: 'AbbVie Inc.'
  },
  {
    symbol: 'ABC',
    name: 'AmerisourceBergen Corporation'
  },
  {
    symbol: 'ABCB',
    name: 'Ameris Bancorp'
  },
  {
    symbol: 'ABCD',
    name: 'Cambium Learning Group Inc.'
  },
  {
    symbol: 'ABDC',
    name: 'Alcentra Capital Corp.'
  },
  {
    symbol: 'ABE',
    name: 'Aberdeen Emerging Markets Company Oppotunities Fund Inc.'
  },
  {
    symbol: 'ABEO',
    name: 'Abeona Therapeutics Inc.'
  },
  {
    symbol: 'ABEOW',
    name: ''
  },
  {
    symbol: 'ABEV',
    name: 'Ambev S.A. American Depositary Shares (Each representing 1)'
  },
  {
    symbol: 'ABG',
    name: 'Asbury Automotive Group Inc'
  },
  {
    symbol: 'ABIL',
    name: 'Ability Inc.'
  },
  {
    symbol: 'ABIO',
    name: 'ARCA biopharma Inc.'
  },
  {
    symbol: 'ABLX',
    name: 'Ablynx NV'
  },
  {
    symbol: 'ABM',
    name: 'ABM Industries Incorporated'
  },
  {
    symbol: 'ABMD',
    name: 'ABIOMED Inc.'
  },
  {
    symbol: 'ABR',
    name: 'Arbor Realty Trust'
  },
  {
    symbol: 'ABR-A',
    name: 'Arbor Realty Trust Preferred Series A'
  },
  {
    symbol: 'ABR-B',
    name: 'Arbor Realty Trust Cumulative Redeemable Preferred Series B'
  },
  {
    symbol: 'ABR-C',
    name: 'Arbor Realty Trust Cumulative Redeemable Preferred Series C'
  },
  {
    symbol: 'ABRN',
    name: 'Arbor Realty Trust 7.375% Senior Notes due 2021'
  },
  {
    symbol: 'ABT',
    name: 'Abbott Laboratories'
  },
  {
    symbol: 'ABTX',
    name: 'Allegiance Bancshares Inc.'
  },
  {
    symbol: 'ABUS',
    name: 'Arbutus Biopharma Corporation'
  },
  {
    symbol: 'ABX',
    name: 'Barrick Gold Corporation'
  },
  {
    symbol: 'AC',
    name: 'Associated Capital Group Inc.'
  },
  {
    symbol: 'ACAD',
    name: 'ACADIA Pharmaceuticals Inc.'
  },
  {
    symbol: 'ACBI',
    name: 'Atlantic Capital Bancshares Inc.'
  },
  {
    symbol: 'ACC',
    name: 'American Campus Communities Inc'
  },
  {
    symbol: 'ACCO',
    name: 'Acco Brands Corporation'
  },
  {
    symbol: 'ACER',
    name: 'Acer Therapeutics Inc.'
  },
  {
    symbol: 'ACERW',
    name: ''
  },
  {
    symbol: 'ACET',
    name: 'Aceto Corporation'
  },
  {
    symbol: 'ACFC',
    name: 'Atlantic Coast Financial Corporation'
  },
  {
    symbol: 'ACGL',
    name: 'Arch Capital Group Ltd.'
  },
  {
    symbol: 'ACGLO',
    name: 'Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of5.45% Non-Cumulative Preferred Shares Series F'
  },
  {
    symbol: 'ACGLP',
    name: 'Arch Capital Group Ltd. Depositary Shares Representing Interest in 5.25% Non-Cumulative Preferred Series E Shrs'
  },
  {
    symbol: 'ACH',
    name: 'Aluminum Corporation of China Limited American Depositary Shares'
  },
  {
    symbol: 'ACHC',
    name: 'Acadia Healthcare Company Inc.'
  },
  {
    symbol: 'ACHN',
    name: 'Achillion Pharmaceuticals Inc.'
  },
  {
    symbol: 'ACHV',
    name: 'Achieve Life Sciences Inc.'
  },
  {
    symbol: 'ACIA',
    name: 'Acacia Communications Inc.'
  },
  {
    symbol: 'ACIM',
    name: 'SPDR MSCI ACWI IMI'
  },
  {
    symbol: 'ACIU',
    name: 'AC Immune SA'
  },
  {
    symbol: 'ACIW',
    name: 'ACI Worldwide Inc.'
  },
  {
    symbol: 'ACLS',
    name: 'Axcelis Technologies Inc.'
  },
  {
    symbol: 'ACM',
    name: 'AECOM'
  },
  {
    symbol: 'ACMR',
    name: 'ACM Research Inc.'
  },
  {
    symbol: 'ACN',
    name: 'Accenture plc Class A (Ireland)'
  },
  {
    symbol: 'ACNB',
    name: 'ACNB Corporation'
  },
  {
    symbol: 'ACOR',
    name: 'Acorda Therapeutics Inc.'
  },
  {
    symbol: 'ACP',
    name: 'Aberdeen Income Credit Strategies Fund'
  },
  {
    symbol: 'ACRE',
    name: 'Ares Commercial Real Estate Corporation'
  },
  {
    symbol: 'ACRS',
    name: 'Aclaris Therapeutics Inc.'
  },
  {
    symbol: 'ACRX',
    name: 'AcelRx Pharmaceuticals Inc.'
  },
  {
    symbol: 'ACSF',
    name: 'American Capital Senior Floating Ltd.'
  },
  {
    symbol: 'ACSI',
    name: 'American Customer Satisfaction Core Alpha'
  },
  {
    symbol: 'ACST',
    name: 'Acasti Pharma Inc.'
  },
  {
    symbol: 'ACT',
    name: 'AdvisorShares Vice ETF'
  },
  {
    symbol: 'ACTA',
    name: 'Actua Corporation'
  },
  {
    symbol: 'ACTG',
    name: 'Acacia Research Corporation'
  },
  {
    symbol: 'ACU',
    name: 'Acme United Corporation.'
  },
  {
    symbol: 'ACV',
    name: 'AllianzGI Diversified Income & Convertible Fund of Beneficial Interest'
  },
  {
    symbol: 'ACWF',
    name: 'iShares Edge MSCI Multifactor Global'
  },
  {
    symbol: 'ACWI',
    name: 'iShares MSCI ACWI Index Fund'
  },
  {
    symbol: 'ACWV',
    name: 'iShares Edge MSCI Min Vol Global'
  },
  {
    symbol: 'ACWX',
    name: 'iShares MSCI ACWI ex US Index Fund'
  },
  {
    symbol: 'ACXM',
    name: 'Acxiom Corporation'
  },
  {
    symbol: 'ACY',
    name: 'AeroCentury Corp.'
  },
  {
    symbol: 'ADAP',
    name: 'Adaptimmune Therapeutics plc'
  },
  {
    symbol: 'ADBE',
    name: 'Adobe Systems Incorporated'
  },
  {
    symbol: 'ADC',
    name: 'Agree Realty Corporation'
  },
  {
    symbol: 'ADES',
    name: 'Advanced Emissions Solutions Inc.'
  },
  {
    symbol: 'ADI',
    name: 'Analog Devices Inc.'
  },
  {
    symbol: 'ADM',
    name: 'Archer-Daniels-Midland Company'
  },
  {
    symbol: 'ADMA',
    name: 'ADMA Biologics Inc'
  },
  {
    symbol: 'ADMP',
    name: 'Adamis Pharmaceuticals Corporation'
  },
  {
    symbol: 'ADMS',
    name: 'Adamas Pharmaceuticals Inc.'
  },
  {
    symbol: 'ADNT',
    name: 'Adient plc'
  },
  {
    symbol: 'ADOM',
    name: 'ADOMANI Inc.'
  },
  {
    symbol: 'ADP',
    name: 'Automatic Data Processing Inc.'
  },
  {
    symbol: 'ADRA',
    name: 'BLDRS Asia 50 ADR Index Fund'
  },
  {
    symbol: 'ADRD',
    name: 'BLDRS Developed Markets 100 ADR Index Fund'
  },
  {
    symbol: 'ADRE',
    name: 'BLDRS Emerging Markets 50 ADR Index Fund'
  },
  {
    symbol: 'ADRO',
    name: 'Aduro Biotech Inc.'
  },
  {
    symbol: 'ADRU',
    name: 'BLDRS Europe 100 ADR Index Fund'
  },
  {
    symbol: 'ADS',
    name: 'Alliance Data Systems Corporation'
  },
  {
    symbol: 'ADSK',
    name: 'Autodesk Inc.'
  },
  {
    symbol: 'ADSW',
    name: 'Advanced Disposal Services Inc.'
  },
  {
    symbol: 'ADT',
    name: 'ADT INC'
  },
  {
    symbol: 'ADTN',
    name: 'ADTRAN Inc.'
  },
  {
    symbol: 'ADUS',
    name: 'Addus HomeCare Corporation'
  },
  {
    symbol: 'ADVM',
    name: 'Adverum Biotechnologies Inc.'
  },
  {
    symbol: 'ADX',
    name: 'Adams Diversified Equity Fund Inc.'
  },
  {
    symbol: 'ADXS',
    name: 'Advaxis Inc.'
  },
  {
    symbol: 'ADXSW',
    name: 'Advaxis Inc. Warrants'
  },
  {
    symbol: 'ADZ',
    name: 'DB Agriculture Short ETN due April 1 2038'
  },
  {
    symbol: 'AE',
    name: 'Adams Resources & Energy Inc.'
  },
  {
    symbol: 'AEB',
    name: 'AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands)'
  },
  {
    symbol: 'AED',
    name: 'AEGON N.V. Perp. Cap. Securities (Netherlands)'
  },
  {
    symbol: 'AEE',
    name: 'Ameren Corporation'
  },
  {
    symbol: 'AEG',
    name: 'AEGON N.V.'
  },
  {
    symbol: 'AEGN',
    name: 'Aegion Corp'
  },
  {
    symbol: 'AEH',
    name: 'AEGON N.V. Perp. Cap Secs.'
  },
  {
    symbol: 'AEHR',
    name: 'Aehr Test Systems'
  },
  {
    symbol: 'AEIS',
    name: 'Advanced Energy Industries Inc.'
  },
  {
    symbol: 'AEK',
    name: 'Aegon NV 8.00% Non-Cumulative Subordinated Notes due 2042'
  },
  {
    symbol: 'AEL',
    name: 'American Equity Investment Life Holding Company'
  },
  {
    symbol: 'AEM',
    name: 'Agnico Eagle Mines Limited'
  },
  {
    symbol: 'AEMD',
    name: 'Aethlon Medical Inc.'
  },
  {
    symbol: 'AEO',
    name: 'American Eagle Outfitters Inc.'
  },
  {
    symbol: 'AEP',
    name: 'American Electric Power Company Inc.'
  },
  {
    symbol: 'AER',
    name: 'Aercap Holdings N.V.'
  },
  {
    symbol: 'AERI',
    name: 'Aerie Pharmaceuticals Inc.'
  },
  {
    symbol: 'AES',
    name: 'The AES Corporation'
  },
  {
    symbol: 'AET',
    name: 'Aetna Inc.'
  },
  {
    symbol: 'AETI',
    name: 'American Electric Technologies Inc.'
  },
  {
    symbol: 'AEUA',
    name: 'Anadarko Petroleum Corporation 7.50% Tangible Equity Units'
  },
  {
    symbol: 'AEY',
    name: 'ADDvantage Technologies Group Inc.'
  },
  {
    symbol: 'AEZS',
    name: 'Aeterna Zentaris Inc.'
  },
  {
    symbol: 'AFAM',
    name: 'Almost Family Inc'
  },
  {
    symbol: 'AFB',
    name: 'AllianceBernstein National Municipal Income Fund Inc'
  },
  {
    symbol: 'AFC',
    name: 'Allied Capital Corporation 6.875% Notes due April 15 2047'
  },
  {
    symbol: 'AFG',
    name: 'American Financial Group Inc.'
  },
  {
    symbol: 'AFGE',
    name: ''
  },
  {
    symbol: 'AFGH',
    name: ''
  },
  {
    symbol: 'AFH',
    name: 'Atlas Financial Holdings Inc.'
  },
  {
    symbol: 'AFHBL',
    name: 'Atlas Financial Holdings Inc. 6.625% Senior Unsecured Notes Due 2022'
  },
  {
    symbol: 'AFI',
    name: 'Armstrong Flooring Inc.'
  },
  {
    symbol: 'AFK',
    name: 'VanEck Vectors-Africa Index'
  },
  {
    symbol: 'AFL',
    name: 'AFLAC Incorporated'
  },
  {
    symbol: 'AFMD',
    name: 'Affimed N.V.'
  },
  {
    symbol: 'AFSI',
    name: 'AmTrust Financial Services Inc.'
  },
  {
    symbol: 'AFSI-A',
    name: 'AmTrust Financial Services Inc. Preferred Series A'
  },
  {
    symbol: 'AFSI-B',
    name: 'AmTrust Financial Services Inc. Depository Shares Series B'
  },
  {
    symbol: 'AFSI-C',
    name: 'AmTrust Financial Services Inc. Depository Shares Series C'
  },
  {
    symbol: 'AFSI-D',
    name: 'AmTrust Financial Services Inc. Depositary Shares Series D'
  },
  {
    symbol: 'AFSI-E',
    name: 'AmTrust Financial Services Inc. Depositary Shares Series E'
  },
  {
    symbol: 'AFSI-F',
    name: 'AmTrust Financial Services Inc. Depositary Shares Series F'
  },
  {
    symbol: 'AFSS',
    name: ''
  },
  {
    symbol: 'AFST',
    name: ''
  },
  {
    symbol: 'AFT',
    name: 'Apollo Senior Floating Rate Fund Inc.'
  },
  {
    symbol: 'AFTY',
    name: 'CSOP FTSE China A50'
  },
  {
    symbol: 'AG',
    name: 'First Majestic Silver Corp. (Canada)'
  },
  {
    symbol: 'AGA',
    name: 'DB Agriculture Double Short ETN due April 1 2038'
  },
  {
    symbol: 'AGC',
    name: 'Advent Claymore Convertible Securities and Income Fund of Beneficial Interest'
  },
  {
    symbol: 'AGCO',
    name: 'AGCO Corporation'
  },
  {
    symbol: 'AGD',
    name: 'Alpine Global Dynamic Dividend Fund Shares of Beneficial Interest'
  },
  {
    symbol: 'AGEN',
    name: 'Agenus Inc.'
  },
  {
    symbol: 'AGF',
    name: 'DB Agriculture Long ETN due April 1 2038'
  },
  {
    symbol: 'AGFS',
    name: 'AgroFresh Solutions Inc.'
  },
  {
    symbol: 'AGFSW',
    name: 'AgroFresh Solutions Inc. Warrants'
  },
  {
    symbol: 'AGG',
    name: 'iShares Core U.S. Aggregate Bond'
  },
  {
    symbol: 'AGGE',
    name: 'IQ Enhanced Core Bond U.S.'
  },
  {
    symbol: 'AGGP',
    name: 'IQ Enhanced Core Plus Bond U.S.'
  },
  {
    symbol: 'AGGY',
    name: 'WisdomTree Barclays Yield Enhanced U.S. Aggregate Bond Fund'
  },
  {
    symbol: 'AGI',
    name: 'Alamos Gold Inc. Class A'
  },
  {
    symbol: 'AGII',
    name: 'Argo Group International Holdings Ltd.'
  },
  {
    symbol: 'AGIIL',
    name: 'Argo Group International Holdings Ltd. 6.5% Senior Notes Due 2042'
  },
  {
    symbol: 'AGIO',
    name: 'Agios Pharmaceuticals Inc.'
  },
  {
    symbol: 'AGLE',
    name: 'Aeglea BioTherapeutics Inc.'
  },
  {
    symbol: 'AGM',
    name: 'Federal Agricultural Mortgage Corporation'
  },
  {
    symbol: 'AGM-A',
    name: 'Federal Agricultural Mortgage Corporation 5.875% Non-CUmulative Preferred Stock Series A'
  },
  {
    symbol: 'AGM-B',
    name: 'Federal Agricultural Mortgage Corporation Non Cumulative Preferred Stock Series B'
  },
  {
    symbol: 'AGM-C',
    name: 'Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg'
  },
  {
    symbol: 'AGM.A',
    name: 'Federal Agricultural Mortgage Corporation'
  },
  {
    symbol: 'AGN',
    name: 'Allergan plc'
  },
  {
    symbol: 'AGN-A',
    name: 'Allergan plc. 5.50% Mandatory Convertible Preferred Shares Series A'
  },
  {
    symbol: 'AGNC',
    name: 'AGNC Investment Corp.'
  },
  {
    symbol: 'AGNCB',
    name: 'AGNC Investment Corp. Depositary Shares representing 1/1000th Series B Preferred Stock'
  },
  {
    symbol: 'AGNCN',
    name: 'AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferre'
  },
  {
    symbol: 'AGND',
    name: 'WisdomTree Barclays Negative Duration U.S. Aggregate Bond Fund'
  },
  {
    symbol: 'AGO',
    name: 'Assured Guaranty Ltd.'
  },
  {
    symbol: 'AGO-B',
    name: 'Assured Guaranty Ltd.'
  },
  {
    symbol: 'AGO-E',
    name: 'Assured Guaranty Ltd.'
  },
  {
    symbol: 'AGO-F',
    name: 'Assured Guaranty Ltd.'
  },
  {
    symbol: 'AGQ',
    name: 'ProShares Ultra Silver'
  },
  {
    symbol: 'AGR',
    name: 'Avangrid Inc.'
  },
  {
    symbol: 'AGRO',
    name: 'Adecoagro S.A.'
  },
  {
    symbol: 'AGRX',
    name: 'Agile Therapeutics Inc.'
  },
  {
    symbol: 'AGT',
    name: 'iShares MSCI Argentina and Global Exposure'
  },
  {
    symbol: 'AGTC',
    name: 'Applied Genetic Technologies Corporation'
  },
  {
    symbol: 'AGX',
    name: 'Argan Inc.'
  },
  {
    symbol: 'AGYS',
    name: 'Agilysys Inc.'
  },
  {
    symbol: 'AGZ',
    name: 'iShares Agency Bond'
  },
  {
    symbol: 'AGZD',
    name: 'WisdomTree Barclays Interest Rate Hedged U.S. Aggregate Bond Fund'
  },
  {
    symbol: 'AHC',
    name: 'A.H. Belo Corporation'
  },
  {
    symbol: 'AHGP',
    name: 'Alliance Holdings GP L.P.'
  },
  {
    symbol: 'AHH',
    name: 'Armada Hoffler Properties Inc.'
  },
  {
    symbol: 'AHL',
    name: 'Aspen Insurance Holdings Limited'
  },
  {
    symbol: 'AHL-C',
    name: 'Aspen Insurance Holdings Limited 5.95% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Shares'
  },
  {
    symbol: 'AHL-D',
    name: 'Aspen Insurance Holdings Limited 5.625% Perpetual Non-Cumulative Preference Shares'
  },
  {
    symbol: 'AHP',
    name: 'Ashford Hospitality Prime Inc.'
  },
  {
    symbol: 'AHP-B',
    name: 'Ashford Hospitality Prime Inc. 5.50% Series B Cumulative Convertible Preferred Stock par value $0.01 per share'
  },
  {
    symbol: 'AHPA',
    name: 'Avista Healthcare Public Acquisition Corp.'
  },
  {
    symbol: 'AHPAU',
    name: 'Avista Healthcare Public Acquisition Corp. Unit'
  },
  {
    symbol: 'AHPAW',
    name: 'Avista Healthcare Public Acquisition Corp. Warrants'
  },
  {
    symbol: 'AHPI',
    name: 'Allied Healthcare Products Inc.'
  },
  {
    symbol: 'AHT',
    name: 'Ashford Hospitality Trust Inc'
  },
  {
    symbol: 'AHT-D',
    name: 'Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock'
  },
  {
    symbol: 'AHT-F',
    name: 'Ashford Hospitality Trust Inc 7.375% Series F Cumulative Preferred Stock'
  },
  {
    symbol: 'AHT-G',
    name: 'Ashford Hospitality Trust Inc 7.375% Series G Cumulative Preferred Stock'
  },
  {
    symbol: 'AHT-H',
    name: 'Ashford Hospitality Trust Inc 7.50% Series H Cumulative Preferred Stock'
  },
  {
    symbol: 'AHT-I',
    name: 'Ashford Hospitality Trust Inc 7.50% Series I Cumulative Preferred Stock'
  },
  {
    symbol: 'AI',
    name: 'Arlington Asset Investment Corp Class A (new)'
  },
  {
    symbol: 'AI-B',
    name: 'Arlington Asset Investment Corp 7.00% Series B Cumulative Perpetual Redeemable Preferred Stock'
  },
  {
    symbol: 'AIA',
    name: 'iShares Asia 50 ETF'
  },
  {
    symbol: 'AIC',
    name: ''
  },
  {
    symbol: 'AIEQ',
    name: 'AI Powered Equity'
  },
  {
    symbol: 'AIF',
    name: 'Apollo Tactical Income Fund Inc.'
  },
  {
    symbol: 'AIG',
    name: 'American International Group Inc.'
  },
  {
    symbol: 'AIG+',
    name: 'American International Group Inc. Warrant expiring January 19 2021'
  },
  {
    symbol: 'AIMC',
    name: 'Altra Industrial Motion Corp.'
  },
  {
    symbol: 'AIMT',
    name: 'Aimmune Therapeutics Inc.'
  },
  {
    symbol: 'AIN',
    name: 'Albany International Corporation'
  },
  {
    symbol: 'AINC',
    name: 'Ashford Inc.'
  },
  {
    symbol: 'AINV',
    name: 'Apollo Investment Corporation'
  },
  {
    symbol: 'AIR',
    name: 'AAR Corp.'
  },
  {
    symbol: 'AIRG',
    name: 'Airgain Inc.'
  },
  {
    symbol: 'AIRI',
    name: 'Air Industries Group'
  },
  {
    symbol: 'AIRR',
    name: 'First Trust RBA American Industrial Renaissance ETF'
  },
  {
    symbol: 'AIRT',
    name: 'Air T Inc.'
  },
  {
    symbol: 'AIT',
    name: 'Applied Industrial Technologies Inc.'
  },
  {
    symbol: 'AIV',
    name: 'Apartment Investment and Management Company'
  },
  {
    symbol: 'AIV-A',
    name: 'Apartment Investment and Management Company Preferred Series Class A'
  },
  {
    symbol: 'AIW',
    name: 'Arlington Asset Investment Corp 6.625% Notes due 2023'
  },
  {
    symbol: 'AIY',
    name: 'Apollo Investment Corporation 6.875% Senior Notes due 2043'
  },
  {
    symbol: 'AIZ',
    name: 'Assurant Inc.'
  },
  {
    symbol: 'AJG',
    name: 'Arthur J. Gallagher & Co.'
  },
  {
    symbol: 'AJRD',
    name: 'Aerojet Rocketdyne Holdings Inc.'
  },
  {
    symbol: 'AJX',
    name: 'Great Ajax Corp.'
  },
  {
    symbol: 'AJXA',
    name: 'Great Ajax Corp. 7.25% Convertible Senior Notes due 2024'
  },
  {
    symbol: 'AKAM',
    name: 'Akamai Technologies Inc.'
  },
  {
    symbol: 'AKAO',
    name: 'Achaogen Inc.'
  },
  {
    symbol: 'AKBA',
    name: 'Akebia Therapeutics Inc.'
  },
  {
    symbol: 'AKCA',
    name: 'Akcea Therapeutics Inc.'
  },
  {
    symbol: 'AKER',
    name: 'Akers Biosciences Inc'
  },
  {
    symbol: 'AKG',
    name: 'Asanko Gold Inc.'
  },
  {
    symbol: 'AKO.A',
    name: 'Embotelladora Andina S.A.'
  },
  {
    symbol: 'AKO.B',
    name: 'Embotelladora Andina S.A.'
  },
  {
    symbol: 'AKP',
    name: 'Alliance California Municipal Income Fund Inc'
  },
  {
    symbol: 'AKR',
    name: 'Acadia Realty Trust'
  },
  {
    symbol: 'AKRX',
    name: 'Akorn Inc.'
  },
  {
    symbol: 'AKS',
    name: 'AK Steel Holding Corporation'
  },
  {
    symbol: 'AKTS',
    name: 'Akoustis Technologies Inc.'
  },
  {
    symbol: 'AKTX',
    name: 'Akari Therapeutics Plc'
  },
  {
    symbol: 'AL',
    name: 'Air Lease Corporation Class A'
  },
  {
    symbol: 'ALB',
    name: 'Albemarle Corporation'
  },
  {
    symbol: 'ALBO',
    name: 'Albireo Pharma Inc.'
  },
  {
    symbol: 'ALCO',
    name: 'Alico Inc.'
  },
  {
    symbol: 'ALD',
    name: 'WisdomTree Asia Local Debt Fund'
  },
  {
    symbol: 'ALDR',
    name: 'Alder BioPharmaceuticals Inc.'
  },
  {
    symbol: 'ALDW',
    name: 'Alon USA Partners LP representing Limited Partner Interests'
  },
  {
    symbol: 'ALDX',
    name: 'Aldeyra Therapeutics Inc.'
  },
  {
    symbol: 'ALE',
    name: 'Allete Inc.'
  },
  {
    symbol: 'ALEX',
    name: 'Alexander & Baldwin Inc. REIT Holding Company'
  },
  {
    symbol: 'ALFA',
    name: 'AlphaClone Alternative Alpha'
  },
  {
    symbol: 'ALFI',
    name: 'AlphaClone International'
  },
  {
    symbol: 'ALG',
    name: 'Alamo Group Inc.'
  },
  {
    symbol: 'ALGN',
    name: 'Align Technology Inc.'
  },
  {
    symbol: 'ALGT',
    name: 'Allegiant Travel Company'
  },
  {
    symbol: 'ALIM',
    name: 'Alimera Sciences Inc.'
  },
  {
    symbol: 'ALJJ',
    name: 'ALJ Regional Holdings Inc.'
  },
  {
    symbol: 'ALK',
    name: 'Alaska Air Group Inc.'
  },
  {
    symbol: 'ALKS',
    name: 'Alkermes plc'
  },
  {
    symbol: 'ALL',
    name: 'Allstate Corporation (The)'
  },
  {
    symbol: 'ALL-A',
    name: 'Allstate Corporation (The) Dep Shs Repstg 1/1000th Perp Pfd Ser A'
  },
  {
    symbol: 'ALL-B',
    name: 'Allstate Corporation (The) 5.100% Fixed-to-Floating Rate Subordinated Debentures due 2053'
  },
  {
    symbol: 'ALL-C',
    name: 'Allstate Corporation (The) Dep Shs Repstg 1/1000th Int Shs Pfd Stk Ser C'
  },
  {
    symbol: 'ALL-D',
    name: 'The Allstate Corporation Leopards Each Representing A 1/1000th Interest In A Share Of Fixed Rate Noncumulative Perpetual Preferred Stock Series D'
  },
  {
    symbol: 'ALL-E',
    name: 'Allstate Corporation Depositary Shares Series E'
  },
  {
    symbol: 'ALL-F',
    name: 'Allstate Corporation (The) Leopards Dep Shares Representing 1/1000th Perp Pfd'
  },
  {
    symbol: 'ALLE',
    name: 'Allegion plc'
  },
  {
    symbol: 'ALLT',
    name: 'Allot Communications Ltd.'
  },
  {
    symbol: 'ALLY',
    name: 'Ally Financial Inc.'
  },
  {
    symbol: 'ALLY-A',
    name: 'GMAC Capital Trust I Fixed Rate Floating Rate Trust Preferred Securities Series 2'
  },
  {
    symbol: 'ALN',
    name: 'American Lorain Corporation'
  },
  {
    symbol: 'ALNA',
    name: 'Allena Pharmaceuticals Inc.'
  },
  {
    symbol: 'ALNY',
    name: 'Alnylam Pharmaceuticals Inc.'
  },
  {
    symbol: 'ALO',
    name: 'Alio Gold Inc. (Canada)'
  },
  {
    symbol: 'ALOG',
    name: 'Analogic Corporation'
  },
  {
    symbol: 'ALOT',
    name: 'AstroNova Inc.'
  },
  {
    symbol: 'ALP-Q',
    name: 'Alabama Power Company 5.00% Class A Preferred Stock Cumulative Par Value $1 Per Share (Stated Capital $25 Per Share)'
  },
  {
    symbol: 'ALPN',
    name: 'Alpine Immune Sciences Inc.'
  },
  {
    symbol: 'ALQA',
    name: 'Alliqua BioMedical Inc.'
  },
  {
    symbol: 'ALRM',
    name: 'Alarm.com Holdings Inc.'
  },
  {
    symbol: 'ALRN',
    name: 'Aileron Therapeutics Inc.'
  },
  {
    symbol: 'ALSK',
    name: 'Alaska Communications Systems Group Inc.'
  },
  {
    symbol: 'ALSN',
    name: 'Allison Transmission Holdings Inc.'
  },
  {
    symbol: 'ALT',
    name: 'Altimmune Inc.'
  },
  {
    symbol: 'ALTR',
    name: 'Altair Engineering Inc.'
  },
  {
    symbol: 'ALTS',
    name: 'ProShares Morningstar Alternatives Solution'
  },
  {
    symbol: 'ALTY',
    name: 'Global X SuperDividend Alternatives ETF'
  },
  {
    symbol: 'ALV',
    name: 'Autoliv Inc.'
  },
  {
    symbol: 'ALX',
    name: 'Alexander\'s Inc.'
  },
  {
    symbol: 'ALXN',
    name: 'Alexion Pharmaceuticals Inc.'
  },
  {
    symbol: 'AM',
    name: 'Antero Midstream Partners LP representing limited partner interests'
  },
  {
    symbol: 'AMAG',
    name: 'AMAG Pharmaceuticals Inc.'
  },
  {
    symbol: 'AMAT',
    name: 'Applied Materials Inc.'
  },
  {
    symbol: 'AMBA',
    name: 'Ambarella Inc.'
  },
  {
    symbol: 'AMBC',
    name: 'Ambac Financial Group Inc.'
  },
  {
    symbol: 'AMBCW',
    name: 'Ambac Financial Group Inc. Warrants'
  },
  {
    symbol: 'AMBR',
    name: 'Amber Road Inc.'
  },
  {
    symbol: 'AMC',
    name: 'AMC Entertainment Holdings Inc. Class A'
  },
  {
    symbol: 'AMCA',
    name: 'iShares Russell 1000 Pure U.S. Revenue ETF'
  },
  {
    symbol: 'AMCN',
    name: 'AirMedia Group Inc'
  },
  {
    symbol: 'AMCX',
    name: 'AMC Networks Inc.'
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices Inc.'
  },
  {
    symbol: 'AMDA',
    name: 'Amedica Corporation'
  },
  {
    symbol: 'AME',
    name: 'AMETEK Inc.'
  },
  {
    symbol: 'AMED',
    name: 'Amedisys Inc'
  },
  {
    symbol: 'AMEH',
    name: 'Apollo Medical Holdings Inc.'
  },
  {
    symbol: 'AMG',
    name: 'Affiliated Managers Group Inc.'
  },
  {
    symbol: 'AMGN',
    name: 'Amgen Inc.'
  },
  {
    symbol: 'AMGP',
    name: 'Antero Midstream GP LP of Beneficial Interests'
  },
  {
    symbol: 'AMH',
    name: 'American Homes 4 Rent of Beneficial Interest'
  },
  {
    symbol: 'AMH-C',
    name: 'American Homes 4 Rent Participating Pfd Ser C'
  },
  {
    symbol: 'AMH-D',
    name: 'American Homes 4 Rent 6.5% Series D Cumulative Perpetual Preferred Shares of Beneficial Interest'
  },
  {
    symbol: 'AMH-E',
    name: 'American Homes 4 Rent 6.35% Series E Cumulative Redeemable Perpetual Preferred Shares of Beneficial Interest'
  },
  {
    symbol: 'AMH-F',
    name: 'American Homes 4 Rent 5.875% Series F Cumulative Redeemable Perpetual Preferred Shares'
  },
  {
    symbol: 'AMH-G',
    name: 'American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest'
  },
  {
    symbol: 'AMID',
    name: 'American Midstream Partners LP representing Limited Partner Interests'
  },
  {
    symbol: 'AMJ',
    name: 'JPMorgan Chase Capital XVI JP Morgan Alerian MLP ETN'
  },
  {
    symbol: 'AMJL',
    name: 'Credit Suisse X-Links Monthly Pay 2xLeveraged Alerian MLP Index Exchange Traded Notes due May 16 2036'
  },
  {
    symbol: 'AMKR',
    name: 'Amkor Technology Inc.'
  },
  {
    symbol: 'AMLP',
    name: 'Alerian MLP'
  },
  {
    symbol: 'AMLX',
    name: 'Amplify YieldShares Oil Hedged MLP Income'
  },
  {
    symbol: 'AMMA',
    name: 'Alliance MMA Inc.'
  },
  {
    symbol: 'AMN',
    name: 'AMN Healthcare Services Inc'
  },
  {
    symbol: 'AMNB',
    name: 'American National Bankshares Inc.'
  },
  {
    symbol: 'AMOT',
    name: 'Allied Motion Technologies Inc.'
  },
  {
    symbol: 'AMOV',
    name: 'America Movil S.A.B. de C.V. Class An Depositary Shares'
  },
  {
    symbol: 'AMP',
    name: 'Ameriprise Financial Inc.'
  },
  {
    symbol: 'AMPE',
    name: 'Ampio Pharmaceuticals Inc.'
  },
  {
    symbol: 'AMPH',
    name: 'Amphastar Pharmaceuticals Inc.'
  },
  {
    symbol: 'AMRB',
    name: 'American River Bankshares'
  },
  {
    symbol: 'AMRC',
    name: 'Ameresco Inc. Class A'
  },
  {
    symbol: 'AMRH',
    name: 'Ameri Holdings Inc.'
  },
  {
    symbol: 'AMRHW',
    name: 'Ameri Holdings Inc. Warrant'
  },
  {
    symbol: 'AMRK',
    name: 'A-Mark Precious Metals Inc.'
  },
  {
    symbol: 'AMRN',
    name: 'Amarin Corporation plc'
  },
  {
    symbol: 'AMRS',
    name: 'Amyris Inc.'
  },
  {
    symbol: 'AMS',
    name: 'American Shared Hospital Services'
  },
  {
    symbol: 'AMSC',
    name: 'American Superconductor Corporation'
  },
  {
    symbol: 'AMSF',
    name: 'AMERISAFE Inc.'
  },
  {
    symbol: 'AMSWA',
    name: 'American Software Inc. Class A Common Stock'
  },
  {
    symbol: 'AMT',
    name: 'American Tower Corporation (REIT)'
  },
  {
    symbol: 'AMT-B',
    name: 'American Tower Corporation (REIT) Depositary Shares Series B'
  },
  {
    symbol: 'AMTD',
    name: 'TD Ameritrade Holding Corporation'
  },
  {
    symbol: 'AMTX',
    name: 'Aemetis Inc'
  },
  {
    symbol: 'AMU',
    name: 'ETRACS Alerian MLP Index ETN'
  },
  {
    symbol: 'AMUB',
    name: 'ETRACS Alerian MLP Index ETN Series B due July 18 2042'
  },
  {
    symbol: 'AMWD',
    name: 'American Woodmark Corporation'
  },
  {
    symbol: 'AMX',
    name: 'America Movil S.A.B. de C.V.n Depository Receipt Series L'
  },
  {
    symbol: 'AMZA',
    name: 'InfraCap MLP'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.'
  },
  {
    symbol: 'AN',
    name: 'AutoNation Inc.'
  },
  {
    symbol: 'ANAB',
    name: 'AnaptysBio Inc.'
  },
  {
    symbol: 'ANAT',
    name: 'American National Insurance Company'
  },
  {
    symbol: 'ANCB',
    name: 'Anchor Bancorp'
  },
  {
    symbol: 'ANCX',
    name: 'Access National Corporation'
  },
  {
    symbol: 'ANDA',
    name: 'Andina Acquisition Corp. II'
  },
  {
    symbol: 'ANDAR',
    name: 'Andina Acquisition Corp. II Right'
  },
  {
    symbol: 'ANDAU',
    name: 'Andina Acquisition Corp. II Unit'
  },
  {
    symbol: 'ANDAW',
    name: ''
  },
  {
    symbol: 'ANDE',
    name: 'The Andersons Inc.'
  },
  {
    symbol: 'ANDV',
    name: 'Andeavor'
  },
  {
    symbol: 'ANDX',
    name: 'Andeavor Logistics LP representing Limited Partner Interests'
  },
  {
    symbol: 'ANET',
    name: 'Arista Networks Inc.'
  },
  {
    symbol: 'ANF',
    name: 'Abercrombie & Fitch Company'
  },
  {
    symbol: 'ANFI',
    name: 'Amira Nature Foods Ltd'
  },
  {
    symbol: 'ANGI',
    name: 'ANGI Homeservices Inc.'
  },
  {
    symbol: 'ANGL',
    name: 'VanEck Vectors Fallen Angel High Yield Bond'
  },
  {
    symbol: 'ANGO',
    name: 'AngioDynamics Inc.'
  },
  {
    symbol: 'ANH',
    name: 'Anworth Mortgage Asset Corporation'
  },
  {
    symbol: 'ANH-A',
    name: 'Anworth Mortgage Asset Corporation Series A Preferred Stock'
  },
  {
    symbol: 'ANH-B',
    name: 'Anworth Mortgage Asset Corporation Preferred Stock Series B 6.25%'
  },
  {
    symbol: 'ANH-C',
    name: 'Anworth Mortgage Asset Corporation 7.625% Series C Cumulative Redeemable Preferred Stock'
  },
  {
    symbol: 'ANIK',
    name: 'Anika Therapeutics Inc.'
  },
  {
    symbol: 'ANIP',
    name: 'ANI Pharmaceuticals Inc.'
  },
  {
    symbol: 'ANSS',
    name: 'ANSYS Inc.'
  },
  {
    symbol: 'ANTH',
    name: 'Anthera Pharmaceuticals Inc.'
  },
  {
    symbol: 'ANTM',
    name: 'Anthem Inc.'
  },
  {
    symbol: 'ANTX',
    name: 'Anthem Inc. Corporate Units'
  },
  {
    symbol: 'ANW',
    name: 'Aegean Marine Petroleum Network Inc.'
  },
  {
    symbol: 'ANY',
    name: 'Sphere 3D Corp.'
  },
  {
    symbol: 'AOA',
    name: 'iShares Core Aggressive Allocation'
  },
  {
    symbol: 'AOBC',
    name: 'American Outdoor Brands Corporation'
  },
  {
    symbol: 'AOD',
    name: 'Alpine Total Dynamic Dividend Fund'
  },
  {
    symbol: 'AOI',
    name: 'Alliance One International Inc.'
  },
  {
    symbol: 'AOK',
    name: 'iShares Core Conservative Allocation'
  },
  {
    symbol: 'AOM',
    name: 'iShares Core Moderate Allocation'
  },
  {
    symbol: 'AON',
    name: 'Aon plc Class A (UK)'
  },
  {
    symbol: 'AOR',
    name: 'iShares Core Growth Allocation'
  },
  {
    symbol: 'AOS',
    name: 'A.O. Smith Corporation'
  },
  {
    symbol: 'AOSL',
    name: 'Alpha and Omega Semiconductor Limited'
  },
  {
    symbol: 'AP',
    name: 'Ampco-Pittsburgh Corporation'
  },
  {
    symbol: 'APA',
    name: 'Apache Corporation'
  },
  {
    symbol: 'APAM',
    name: 'Artisan Partners Asset Management Inc. Class A'
  },
  {
    symbol: 'APB',
    name: 'Asia Pacific Fund Inc. (The)'
  },
  {
    symbol: 'APC',
    name: 'Anadarko Petroleum Corporation'
  },
  {
    symbol: 'APD',
    name: 'Air Products and Chemicals Inc.'
  },
  {
    symbol: 'APDN',
    name: 'Applied DNA Sciences Inc'
  },
  {
    symbol: 'APDNW',
    name: ''
  },
  {
    symbol: 'APEI',
    name: 'American Public Education Inc.'
  },
  {
    symbol: 'APEN',
    name: 'Apollo Endosurgery Inc.'
  },
  {
    symbol: 'APF',
    name: 'Morgan Stanley Asia-Pacific Fund Inc.'
  },
  {
    symbol: 'APH',
    name: 'Amphenol Corporation'
  },
  {
    symbol: 'APHB',
    name: 'AmpliPhi Biosciences Corporation'
  },
  {
    symbol: 'APLE',
    name: 'Apple Hospitality REIT Inc.'
  },
  {
    symbol: 'APLP',
    name: 'Archrock Partners L.P.'
  },
  {
    symbol: 'APLS',
    name: 'Apellis Pharmaceuticals Inc.'
  },
  {
    symbol: 'APO',
    name: 'Apollo Global Management LLC Class A Representing Class A Limitied Liability Company Interests'
  },
  {
    symbol: 'APO-A',
    name: 'Apollo Global Management LLC 6.375% Series A Preferred Shares'
  },
  {
    symbol: 'APOG',
    name: 'Apogee Enterprises Inc.'
  },
  {
    symbol: 'APOP',
    name: 'Cellect Biotechnology Ltd.'
  },
  {
    symbol: 'APOPW',
    name: 'Cellect Biotechnology Ltd. Warrants to Purchase ADR (1 WT and $7.50 to purchase 1 ADS)'
  },
  {
    symbol: 'APPF',
    name: 'AppFolio Inc.'
  },
  {
    symbol: 'APPN',
    name: 'Appian Corporation'
  },
  {
    symbol: 'APPS',
    name: 'Digital Turbine Inc.'
  },
  {
    symbol: 'APRI',
    name: 'Apricus Biosciences Inc.'
  },
  {
    symbol: 'APRN',
    name: 'Blue Apron Holdings Inc. Class A'
  },
  {
    symbol: 'APT',
    name: 'Alpha Pro Tech Ltd.'
  },
  {
    symbol: 'APTI',
    name: 'Apptio Inc.'
  },
  {
    symbol: 'APTO',
    name: 'Aptose Biosciences Inc.'
  },
  {
    symbol: 'APTS',
    name: 'Preferred Apartment Communities Inc.'
  },
  {
    symbol: 'APTV',
    name: 'Aptiv PLC'
  },
  {
    symbol: 'APU',
    name: 'AmeriGas Partners L.P.'
  },
  {
    symbol: 'APVO',
    name: 'Aptevo Therapeutics Inc.'
  },
  {
    symbol: 'APWC',
    name: 'Asia Pacific Wire & Cable Corporation Limited'
  },
  {
    symbol: 'AQ',
    name: 'Aquantia Corp.'
  },
  {
    symbol: 'AQB',
    name: 'AquaBounty Technologies Inc.'
  },
  {
    symbol: 'AQMS',
    name: 'Aqua Metals Inc.'
  },
  {
    symbol: 'AQN',
    name: 'Algonquin Power & Utilities Corp.'
  },
  {
    symbol: 'AQUA',
    name: 'Evoqua Water Technologies Corp.'
  },
  {
    symbol: 'AQXP',
    name: 'Aquinox Pharmaceuticals Inc.'
  },
  {
    symbol: 'AR',
    name: 'Antero Resources Corporation'
  },
  {
    symbol: 'ARA',
    name: 'American Renal Associates Holdings Inc'
  },
  {
    symbol: 'ARAY',
    name: 'Accuray Incorporated'
  },
  {
    symbol: 'ARC',
    name: 'ARC Document Solutions Inc.'
  },
  {
    symbol: 'ARCB',
    name: 'ArcBest Corporation'
  },
  {
    symbol: 'ARCC',
    name: 'Ares Capital Corporation'
  },
  {
    symbol: 'ARCH',
    name: 'Arch Coal Inc. Class A'
  },
  {
    symbol: 'ARCI',
    name: 'Appliance Recycling Centers of America Inc.'
  },
  {
    symbol: 'ARCM',
    name: 'Arrow Reserve Capital Management'
  },
  {
    symbol: 'ARCO',
    name: 'Arcos Dorados Holdings Inc. Class A Shares'
  },
  {
    symbol: 'ARCT',
    name: 'Arcturus Therapeutics Ltd.'
  },
  {
    symbol: 'ARCW',
    name: 'ARC Group Worldwide Inc.'
  },
  {
    symbol: 'ARD',
    name: 'Ardagh Group S.A.'
  },
  {
    symbol: 'ARDC',
    name: 'Ares Dynamic Credit Allocation Fund Inc.'
  },
  {
    symbol: 'ARDM',
    name: 'Aradigm Corporation'
  },
  {
    symbol: 'ARDX',
    name: 'Ardelyx Inc.'
  },
  {
    symbol: 'ARE',
    name: 'Alexandria Real Estate Equities Inc.'
  },
  {
    symbol: 'ARE-D',
    name: 'Alexandria Real Estate Equities Inc. 7.00% Series D Cumulative Convertible Preferred Stock'
  },
  {
    symbol: 'ARES',
    name: 'Ares Management L.P. representing Limited Partner Interests'
  },
  {
    symbol: 'ARES-A',
    name: 'Ares Management L.P. 7.00% Series A Preferred Units Representing Limited Partner Interests'
  },
  {
    symbol: 'AREX',
    name: 'Approach Resources Inc.'
  },
  {
    symbol: 'ARGS',
    name: 'Argos Therapeutics Inc.'
  },
  {
    symbol: 'ARGT',
    name: 'Global X MSCI Argentina'
  },
  {
    symbol: 'ARGX',
    name: 'argenx SE'
  },
  {
    symbol: 'ARI',
    name: 'Apollo Commercial Real Estate Finance Inc'
  },
  {
    symbol: 'ARI-C',
    name: 'Apollo Commercial Real Estate Finance 8.00% Series C Cumulative Redeemable Perpetual Preferred Stock'
  },
  {
    symbol: 'ARII',
    name: 'American Railcar Industries Inc.'
  },
  {
    symbol: 'ARKG',
    name: 'ARK Genomic Revolution Multi-Sector'
  },
  {
    symbol: 'ARKK',
    name: 'ARK Innovation'
  },
  {
    symbol: 'ARKQ',
    name: 'ARK Industrial Innovation'
  },
  {
    symbol: 'ARKR',
    name: 'Ark Restaurants Corp.'
  },
  {
    symbol: 'ARKW',
    name: 'ARK Web x.0'
  },
  {
    symbol: 'ARL',
    name: 'American Realty Investors Inc.'
  },
  {
    symbol: 'ARLP',
    name: 'Alliance Resource Partners L.P.'
  },
  {
    symbol: 'ARLZ',
    name: 'Aralez Pharmaceuticals Inc.'
  },
  {
    symbol: 'ARMK',
    name: 'Aramark'
  },
  {
    symbol: 'ARNA',
    name: 'Arena Pharmaceuticals Inc.'
  },
  {
    symbol: 'ARNC',
    name: 'Arconic Inc.'
  },
  {
    symbol: 'ARNC-',
    name: ''
  },
  {
    symbol: 'AROC',
    name: 'Archrock Inc.'
  },
  {
    symbol: 'AROW',
    name: 'Arrow Financial Corporation'
  },
  {
    symbol: 'ARQL',
    name: 'ArQule Inc.'
  },
  {
    symbol: 'ARR',
    name: 'ARMOUR Residential REIT Inc.'
  },
  {
    symbol: 'ARR-A',
    name: 'Armour Residential REIT INC Preferred Series A'
  },
  {
    symbol: 'ARR-B',
    name: 'ARMOUR Residential REIT Inc. Preferred Series B'
  },
  {
    symbol: 'ARRS',
    name: 'ARRIS International plc'
  },
  {
    symbol: 'ARRY',
    name: 'Array BioPharma Inc.'
  },
  {
    symbol: 'ARTNA',
    name: 'Artesian Resources Corporation Class A Non-Voting Common Stock'
  },
  {
    symbol: 'ARTW',
    name: 'Art\'s-Way Manufacturing Co. Inc.'
  },
  {
    symbol: 'ARTX',
    name: 'Arotech Corporation'
  },
  {
    symbol: 'ARW',
    name: 'Arrow Electronics Inc.'
  },
  {
    symbol: 'ARWR',
    name: 'Arrowhead Pharmaceuticals Inc.'
  },
  {
    symbol: 'ASA',
    name: 'ASA Gold and Precious Metals Limited'
  },
  {
    symbol: 'ASB',
    name: 'Associated Banc-Corp'
  },
  {
    symbol: 'ASB+',
    name: 'Associated Banc-Corp Warrants'
  },
  {
    symbol: 'ASB-C',
    name: 'Associated Banc-Corp Depositary shares Series C'
  },
  {
    symbol: 'ASB-D',
    name: 'Associated Banc-Corp Depositary Shares Series D'
  },
  {
    symbol: 'ASC',
    name: 'Ardmore Shipping Corporation'
  },
  {
    symbol: 'ASCMA',
    name: 'Ascent Capital Group Inc. Series A Common Stock'
  },
  {
    symbol: 'ASEA',
    name: 'Global X FTSE Southeast Asia'
  },
  {
    symbol: 'ASET',
    name: 'FlexShares Real Assets Allocation Index Fund'
  },
  {
    symbol: 'ASFI',
    name: 'Asta Funding Inc.'
  },
  {
    symbol: 'ASG',
    name: 'Liberty All-Star Growth Fund Inc.'
  },
  {
    symbol: 'ASGN',
    name: 'On Assignment Inc.'
  },
  {
    symbol: 'ASH',
    name: 'Ashland Global Holdings Inc.'
  },
  {
    symbol: 'ASHR',
    name: 'Xtrackers Harvest CSI 300 China A-Shares'
  },
  {
    symbol: 'ASHS',
    name: 'Xtrackers Harvest CSI 500 China A-Shares Small Cap'
  },
  {
    symbol: 'ASHX',
    name: 'Xtrackers CSI 300 China A-Shares Hedged Equity'
  },
  {
    symbol: 'ASIX',
    name: 'AdvanSix Inc.'
  },
  {
    symbol: 'ASM',
    name: 'Avino Silver & Gold Mines Ltd. (Canada)'
  },
  {
    symbol: 'ASMB',
    name: 'Assembly Biosciences Inc.'
  },
  {
    symbol: 'ASML',
    name: 'ASML Holding N.V.'
  },
  {
    symbol: 'ASNA',
    name: 'Ascena Retail Group Inc.'
  },
  {
    symbol: 'ASND',
    name: 'Ascendis Pharma A/S'
  },
  {
    symbol: 'ASNS',
    name: 'Arsanis Inc.'
  },
  {
    symbol: 'ASPN',
    name: 'Aspen Aerogels Inc.'
  },
  {
    symbol: 'ASPS',
    name: 'Altisource Portfolio Solutions S.A.'
  },
  {
    symbol: 'ASPU',
    name: 'Aspen Group Inc.'
  },
  {
    symbol: 'ASR',
    name: 'Grupo Aeroportuario del Sureste S.A. de C.V.'
  },
  {
    symbol: 'ASRV',
    name: 'AmeriServ Financial Inc.'
  },
  {
    symbol: 'ASRVP',
    name: 'AmeriServ Financial Inc. AmeriServ Financial Trust I'
  },
  {
    symbol: 'AST',
    name: 'Asterias Biotherapeutics Inc. Common Series A'
  },
  {
    symbol: 'ASTC',
    name: 'Astrotech Corporation'
  },
  {
    symbol: 'ASTE',
    name: 'Astec Industries Inc.'
  },
  {
    symbol: 'ASUR',
    name: 'Asure Software Inc'
  },
  {
    symbol: 'ASV',
    name: 'ASV Holdings Inc.'
  },
  {
    symbol: 'ASX',
    name: 'Advanced Semiconductor Engineering Inc.'
  },
  {
    symbol: 'ASYS',
    name: 'Amtech Systems Inc.'
  },
  {
    symbol: 'AT',
    name: 'Atlantic Power Corporation (Canada)'
  },
  {
    symbol: 'ATAC',
    name: 'Atlantic Acquisition Corp.'
  },
  {
    symbol: 'ATACR',
    name: 'Atlantic Acquisition Corp. Right'
  },
  {
    symbol: 'ATACU',
    name: 'Atlantic Acquisition Corp. Unit'
  },
  {
    symbol: 'ATAI',
    name: 'ATA Inc.'
  },
  {
    symbol: 'ATAX',
    name: 'America First Multifamily Investors L.P.'
  },
  {
    symbol: 'ATEC',
    name: 'Alphatec Holdings Inc.'
  },
  {
    symbol: 'ATEN',
    name: 'A10 Networks Inc.'
  },
  {
    symbol: 'ATGE',
    name: 'Adtalem Global Education Inc.'
  },
  {
    symbol: 'ATH',
    name: 'Athene Holding Ltd. Class A'
  },
  {
    symbol: 'ATHM',
    name: 'Autohome Inc. American Depositary Shares each representing one class A.'
  },
  {
    symbol: 'ATHN',
    name: 'athenahealth Inc.'
  },
  {
    symbol: 'ATHX',
    name: 'Athersys Inc.'
  },
  {
    symbol: 'ATI',
    name: 'Allegheny Technologies Incorporated'
  },
  {
    symbol: 'ATKR',
    name: 'Atkore International Group Inc.'
  },
  {
    symbol: 'ATLC',
    name: 'Atlanticus Holdings Corporation'
  },
  {
    symbol: 'ATLO',
    name: 'Ames National Corporation'
  },
  {
    symbol: 'ATMP',
    name: 'Barclays ETN Plus Select MLP'
  },
  {
    symbol: 'ATNI',
    name: 'ATN International Inc.'
  },
  {
    symbol: 'ATNM',
    name: 'Actinium Pharmaceuticals Inc. (Delaware)'
  },
  {
    symbol: 'ATNX',
    name: 'Athenex Inc.'
  },
  {
    symbol: 'ATO',
    name: 'Atmos Energy Corporation'
  },
  {
    symbol: 'ATOM',
    name: 'Atomera Incorporated'
  },
  {
    symbol: 'ATOS',
    name: 'Atossa Genetics Inc.'
  },
  {
    symbol: 'ATR',
    name: 'AptarGroup Inc.'
  },
  {
    symbol: 'ATRA',
    name: 'Atara Biotherapeutics Inc.'
  },
  {
    symbol: 'ATRC',
    name: 'AtriCure Inc.'
  },
  {
    symbol: 'ATRI',
    name: 'Atrion Corporation'
  },
  {
    symbol: 'ATRO',
    name: 'Astronics Corporation'
  },
  {
    symbol: 'ATRS',
    name: 'Antares Pharma Inc.'
  },
  {
    symbol: 'ATSG',
    name: 'Air Transport Services Group Inc'
  },
  {
    symbol: 'ATTO',
    name: 'Atento S.A.'
  },
  {
    symbol: 'ATTU',
    name: 'Attunity Ltd.'
  },
  {
    symbol: 'ATU',
    name: 'Actuant Corporation'
  },
  {
    symbol: 'ATUS',
    name: 'Altice USA Inc. Class A'
  },
  {
    symbol: 'ATV',
    name: 'Acorn International Inc. ADS'
  },
  {
    symbol: 'ATVI',
    name: 'Activision Blizzard Inc'
  },
  {
    symbol: 'ATXI',
    name: 'Avenue Therapeutics Inc.'
  },
  {
    symbol: 'AU',
    name: 'AngloGold Ashanti Limited'
  },
  {
    symbol: 'AUBN',
    name: 'Auburn National Bancorporation Inc.'
  },
  {
    symbol: 'AUDC',
    name: 'AudioCodes Ltd.'
  },
  {
    symbol: 'AUG',
    name: 'Auryn Resources Inc.'
  },
  {
    symbol: 'AUMN',
    name: 'Golden Minerals Company'
  },
  {
    symbol: 'AUO',
    name: 'AU Optronics Corp American Depositary Shares'
  },
  {
    symbol: 'AUPH',
    name: 'Aurinia Pharmaceuticals Inc'
  },
  {
    symbol: 'AUSE',
    name: 'WisdomTree Australia Dividend Index'
  },
  {
    symbol: 'AUTO',
    name: 'AutoWeb Inc.'
  },
  {
    symbol: 'AUY',
    name: 'Yamana Gold Inc. (Canada)'
  },
  {
    symbol: 'AVA',
    name: 'Avista Corporation'
  },
  {
    symbol: 'AVAL',
    name: 'Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)'
  },
  {
    symbol: 'AVAV',
    name: 'AeroVironment Inc.'
  },
  {
    symbol: 'AVB',
    name: 'AvalonBay Communities Inc.'
  },
  {
    symbol: 'AVD',
    name: 'American Vanguard Corporation ($0.10 Par Value)'
  },
  {
    symbol: 'AVDL',
    name: 'Avadel Pharmaceuticals plc'
  },
  {
    symbol: 'AVEO',
    name: 'AVEO Pharmaceuticals Inc.'
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom Limited'
  },
  {
    symbol: 'AVGR',
    name: 'Avinger Inc.'
  },
  {
    symbol: 'AVH',
    name: 'Avianca Holdings S.A. American Depositary Shares (Each representing 8 preferred Shares)'
  },
  {
    symbol: 'AVHI',
    name: 'A V Homes Inc.'
  },
  {
    symbol: 'AVID',
    name: 'Avid Technology Inc.'
  },
  {
    symbol: 'AVIR',
    name: 'Aviragen Therapeutics Inc.'
  },
  {
    symbol: 'AVK',
    name: 'Advent Claymore Convertible Securities and Income Fund'
  },
  {
    symbol: 'AVNW',
    name: 'Aviat Networks Inc.'
  },
  {
    symbol: 'AVP',
    name: 'Avon Products Inc.'
  },
  {
    symbol: 'AVT',
    name: 'Avnet Inc.'
  },
  {
    symbol: 'AVX',
    name: 'AVX Corporation'
  },
  {
    symbol: 'AVXL',
    name: 'Anavex Life Sciences Corp.'
  },
  {
    symbol: 'AVXS',
    name: 'AveXis Inc.'
  },
  {
    symbol: 'AVY',
    name: 'Avery Dennison Corporation'
  },
  {
    symbol: 'AVYA',
    name: 'Avaya Holdings Corp.'
  },
  {
    symbol: 'AWF',
    name: 'Alliancebernstein Global High Income Fund'
  },
  {
    symbol: 'AWI',
    name: 'Armstrong World Industries Inc'
  },
  {
    symbol: 'AWK',
    name: 'American Water Works Company Inc.'
  },
  {
    symbol: 'AWP',
    name: 'Alpine Global Premier Properties Fund of Beneficial Interest'
  },
  {
    symbol: 'AWR',
    name: 'American States Water Company'
  },
  {
    symbol: 'AWRE',
    name: 'Aware Inc.'
  },
  {
    symbol: 'AWX',
    name: 'Avalon Holdings Corporation'
  },
  {
    symbol: 'AXAS',
    name: 'Abraxas Petroleum Corporation'
  },
  {
    symbol: 'AXDX',
    name: 'Accelerate Diagnostics Inc.'
  },
  {
    symbol: 'AXE',
    name: 'Anixter International Inc.'
  },
  {
    symbol: 'AXGN',
    name: 'AxoGen Inc.'
  },
  {
    symbol: 'AXJL',
    name: 'WisdomTree Asia Pacific ex-Japan Total Dividend Fund'
  },
  {
    symbol: 'AXJV',
    name: 'iShares Edge MSCI A Min Vol Asia ex Japan'
  },
  {
    symbol: 'AXL',
    name: 'American Axle & Manufacturing Holdings Inc.'
  },
  {
    symbol: 'AXON',
    name: 'Axovant Sciences Ltd.'
  },
  {
    symbol: 'AXP',
    name: 'American Express Company'
  },
  {
    symbol: 'AXR',
    name: 'AMREP Corporation'
  },
  {
    symbol: 'AXS',
    name: 'Axis Capital Holdings Limited'
  },
  {
    symbol: 'AXS-D',
    name: 'Axis Capital Holdings Limited Preferred Series D (Bermuda)'
  },
  {
    symbol: 'AXS-E',
    name: 'Axis Capital Holdings Limited Depositary Shares Series E'
  },
  {
    symbol: 'AXSM',
    name: 'Axsome Therapeutics Inc.'
  },
  {
    symbol: 'AXTA',
    name: 'Axalta Coating Systems Ltd.'
  },
  {
    symbol: 'AXTI',
    name: 'AXT Inc'
  },
  {
    symbol: 'AXU',
    name: 'Alexco Resource Corp (Canada)'
  },
  {
    symbol: 'AY',
    name: 'Atlantica Yield plc'
  },
  {
    symbol: 'AYI',
    name: 'Acuity Brands Inc (Holding Company)'
  },
  {
    symbol: 'AYR',
    name: 'Aircastle Limited'
  },
  {
    symbol: 'AYT',
    name: 'iPath GEMS Asia 8 ETN'
  },
  {
    symbol: 'AYTU',
    name: 'Aytu BioScience Inc.'
  },
  {
    symbol: 'AYX',
    name: 'Alteryx Inc. Class A'
  },
  {
    symbol: 'AZN',
    name: 'Astrazeneca PLC'
  },
  {
    symbol: 'AZO',
    name: 'AutoZone Inc.'
  },
  {
    symbol: 'AZPN',
    name: 'Aspen Technology Inc.'
  },
  {
    symbol: 'AZRE',
    name: 'Azure Power Global Limited Equity Shares'
  },
  {
    symbol: 'AZRX',
    name: 'AzurRx BioPharma Inc.'
  },
  {
    symbol: 'AZUL',
    name: 'Azul S.A. American Depositary Shares (each representing three preferred shares)'
  },
  {
    symbol: 'AZZ',
    name: 'AZZ Inc.'
  },
];

export default stocks;
