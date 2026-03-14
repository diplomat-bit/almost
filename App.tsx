import React, { useState, useContext, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Cpu, ShieldAlert, Sparkles, Terminal, ArrowLeft, ExternalLink, Grid } from 'lucide-react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Analytics } from '@vercel/analytics/react';
import { datadogLogs } from '@datadog/browser-logs'; // Assuming you have this installed

// Contexts
import { AuthProvider, AuthContext } from './context/AuthContext';
import { DataProvider, DataContext } from './context/DataContext';

// Layout & Components (assuming these are in src/components, create minimal versions if missing)
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SApp from './components/SApp'; // Placeholder
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import { LoginView } from './components/LoginView'; // Your LoginView
import AIIntentStub from './components/AIIntentStub'; // Placeholder
import AIModuleCard from './components/AIModuleCard'; // For ExternalIframeCollection
import ExternalIframeCollection from './components/ExternalIframeCollection'; // For modules route

// --- Mock/Placeholder Components for compilation ---
const StripeDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const MoneyMovementProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
const PlaidClient: any = function() {}; // Mock client

// Example for all the other views you imported, minimal placeholders
const TransactionsView = () => <AIIntentStub view={View.Transactions} />;
const SendMoneyView = () => <AIIntentStub view={View.SendMoney} />;
const BudgetsView = () => <AIIntentStub view={View.Budgets} />;
const FinancialGoalsView = () => <AIIntentStub view={View.FinancialGoals} />;
const CreditHealthView = () => <AIIntentStub view={View.CreditHealth} />;
const PersonalizationView = () => <AIIntentStub view={View.Personalization} />;
const AccountsView = () => <AIIntentStub view={View.Accounts} />;
const InvestmentsView = () => <AIIntentStub view={View.Investments} />;
const CryptoView = () => <AIIntentStub view={View.CryptoWeb3} />;
const AlgoTradingLab = () => <AIIntentStub view={View.AlgoTradingLab} />;
const ForexArena = () => <AIIntentStub view={View.ForexArena} />;
const CommoditiesExchange = () => <AIIntentStub view={View.CommoditiesExchange} />;
const RealEstateEmpire = () => <AIIntentStub view={View.RealEstateEmpire} />;
const ArtCollectibles = () => <AIIntentStub view={View.ArtCollectibles} />;
const DerivativesDesk = () => <AIIntentStub view={View.DerivativesDesk} />;
const VentureCapitalDesk = () => <AIIntentStub view={View.VentureCapital} />;
const PrivateEquityLounge = () => <AIIntentStub view={View.PrivateEquity} />;
const TaxOptimizationChamber = () => <AIIntentStub view={View.TaxOptimization} />;
const LegacyBuilder = () => <AIIntentStub view={View.LegacyBuilder} />;
const CorporateCommandView: React.FC<{ setActiveView: (view: View) => void }> = ({ setActiveView }) => <AIIntentStub view={View.CorporateCommand} />;
const ModernTreasuryView = () => <AIIntentStub view={View.ModernTreasury} />;
const OpenBankingView = () => <AIIntentStub view={View.OpenBanking} />;
const FinancialDemocracyView = () => <AIIntentStub view={View.FinancialDemocracy} />;
const AIAdStudioView = () => <AIIntentStub view={View.AIAdStudio} />;
const QuantumWeaverView = () => <AIIntentStub view={View.QuantumWeaver} />;
const AgentMarketplaceView = () => <AIIntentStub view={View.AgentMarketplace} />;
const APIIntegrationView = () => <AIIntentStub view={View.APIStatus} />;
const SettingsView = () => <AIIntentStub view={View.Settings} />;
const PlaidDashboardView = () => <AIIntentStub view={View.PlaidMainDashboard} />; // Placeholder
const StripeDashboardView = () => <AIIntentStub view={View.StripeNexus} />; // Placeholder
const MarqetaDashboardView = () => <AIIntentStub view={View.CardholderManagement} />; // Placeholder
const SSOView = () => <AIIntentStub view={View.SSOView} />; // Placeholder
const ConciergeService = () => <AIIntentStub view={View.ConciergeService} />; // Placeholder
const SovereignWealth = () => <AIIntentStub view={View.SovereignWealth} />;
const PhilanthropyHub = () => <AIIntentStub view={View.Philanthropy} />;
const TheVisionView = () => <AIIntentStub view={View.TheVision} />;
const AIAdvisorView = () => <AIIntentStub view={View.AIAdvisor} />;
const AIInsights = () => <AIIntentStub view={View.AIInsights} />;
const SecurityView = () => <AIIntentStub view={View.SecurityCenter} />;
const ComplianceOracleView = () => <AIIntentStub view={View.ComplianceOracle} />;
const GlobalPositionMap = () => <AIIntentStub view={View.GlobalPositionMap} />;
const GlobalSsiHubView = () => <AIIntentStub view={View.GlobalSsiHub} />;
const CustomerDashboard = () => <AIIntentStub view={View.CustomerDashboard} />;
const VerificationReportsView: React.FC<{ customerId: string }> = ({ customerId }) => <AIIntentStub view={View.VerificationReports} />;
const FinancialReportingView = () => <AIIntentStub view={View.FinancialReporting} />;
const TheBookView = () => <AIIntentStub view={View.TheBook} />;
const KnowledgeBaseView = () => <AIIntentStub view={View.KnowledgeBase} />;
const VoiceControl = () => <AIIntentStub view={View.VoiceControl} />;
const QuantumAssets = () => <AIIntentStub view={View.QuantumAssets} />;
const CitibankAccountsView = () => <AIIntentStub view={View.CitibankAccounts} />;
const CitibankAccountProxyView = () => <AIIntentStub view={View.CitibankAccountProxy} />;
const CitibankBillPayView = () => <AIIntentStub view={View.CitibankBillPay} />;
const CitibankCrossBorderView = () => <AIIntentStub view={View.CitibankCrossBorder} />;
const CitibankPayeeManagementView = () => <AIIntentStub view={View.CitibankPayeeManagement} />;
const CitibankStandingInstructionsView = () => <AIIntentStub view={View.CitibankStandingInstructions} />;
const CitibankDeveloperToolsView = () => <AIIntentStub view={View.CitibankDeveloperTools} />;
const CitibankEligibilityView = () => <AIIntentStub view={View.CitibankEligibility} />;
const CitibankUnmaskedDataView: React.FC<{ accountIdsToUnmask: string[] }> = ({ accountIdsToUnmask }) => <AIIntentStub view={View.CitibankUnmaskedData} />;
const PlaidIdentityView = () => <AIIntentStub view={View.PlaidIdentity} />;
const PlaidCRAMonitoringView = () => <AIIntentStub view={View.PlaidCRAMonitoring} />;
const PlaidInstitutionsExplorer: React.FC<{ client: any }> = ({ client }) => <AIIntentStub view={View.PlaidInstitutions} />;
const PlaidItemManagementView: React.FC<{ accessToken: string }> = ({ accessToken }) => <AIIntentStub view={View.PlaidItemManagement} />;
const PlaidMainDashboard = () => <AIIntentStub view={View.PlaidMainDashboard} />;
const StripeNexusView = () => <AIIntentStub view={View.StripeNexus} />;
const CounterpartyDashboardView = () => <AIIntentStub view={View.CounterpartyDashboard} />;
const VirtualAccountsDashboard = () => <AIIntentStub view={View.VirtualAccounts} />;
const CorporateActionsNexusView = () => <AIIntentStub view={View.CorporateActions} />;
const CreditNoteLedger = () => <AIIntentStub view={View.CreditNoteLedger} />;
const ReconciliationHubView = () => <AIIntentStub view={View.ReconciliationHub} />;
const GEINDashboard = () => <AIIntentStub view={View.GEINDashboard} />;
const CardholderManagement = () => <AIIntentStub view={View.CardholderManagement} />;
const UniversalObjectInspector: React.FC<{ data: any }> = ({ data }) => <AIIntentStub view={View.UniversalObjectInspector} />;
const DeveloperHubView = () => <AIIntentStub view={View.DeveloperHub} />;
const ApiPlaygroundView = () => <AIIntentStub view={View.ApiPlayground} />;
const BusinessDemoView = () => <AIIntentStub view={View.BusinessDemoView} />;
const SecurityComplianceView = () => <AIIntentStub view={View.SecurityCompliance} />;
const SchemaExplorer: React.FC<{ schemaData: any }> = ({ schemaData }) => <AIIntentStub view={View.SchemaExplorer} />;
const ResourceGraphView = () => <AIIntentStub view={View.ResourceGraph} />;
const VentureCapitalDeskView = () => <AIIntentStub view={View.VentureCapitalDeskView} />;

// Direct component access mocks
const AccountDetails: React.FC<any> = (props) => <AIIntentStub view={View.AccountDetails} />;
const AccountList: React.FC<any> = (props) => <AIIntentStub view={View.AccountList} />;
const AccountStatementGrid: React.FC<any> = (props) => <AIIntentStub view={View.AccountStatementGrid} />;
const AccountVerificationModal: React.FC<any> = (props) => <AIIntentStub view={View.AccountVerificationModal} />;
const ACHDetailsDisplay: React.FC<any> = (props) => <AIIntentStub view={View.ACHDetailsDisplay} />;
const AICommandLog: React.FC<any> = (props) => <AIIntentStub view={View.AICommandLog} />;
const AIPredictionWidget: React.FC<any> = (props) => <AIIntentStub view={View.AIPredictionWidget} />;
const AssetCatalog: React.FC<any> = (props) => <AIIntentStub view={View.AssetCatalog} />;
const AutomatedSweepRules: React.FC<any> = (props) => <AIIntentStub view={View.AutomatedSweepRules} />;
const BalanceReportChart: React.FC<any> = (props) => <AIIntentStub view={View.BalanceReportChart} />;
const BalanceTransactionTable: React.FC<any> = (props) => <AIIntentStub view={View.BalanceTransactionTable} />;
const CardDesignVisualizer: React.FC<any> = (props) => <AIIntentStub view={View.CardDesignVisualizer} />;
const ChargeDetailModal: React.FC<any> = (props) => <AIIntentStub view={View.ChargeDetailModal} />;
const ChargeList: React.FC<any> = (props) => <AIIntentStub view={View.ChargeList} />;
const ConductorConfigurationView: React.FC<any> = (props) => <AIIntentStub view={View.ConductorConfigurationView} />;
const CounterpartyDetails: React.FC<any> = (props) => <AIIntentStub view={View.CounterpartyDetails} />;
const CounterpartyForm: React.FC<any> = (props) => <AIIntentStub view={View.CounterpartyForm} />;
const DisruptionIndexMeter: React.FC<any> = (props) => <AIIntentStub view={View.DisruptionIndexMeter} />;
const DocumentUploader: React.FC<any> = (props) => <AIIntentStub view={View.DocumentUploader} />;
const DownloadLink: React.FC<any> = (props) => <AIIntentStub view={View.DownloadLink} />;
const EarlyFraudWarningFeed: React.FC<any> = (props) => <AIIntentStub view={View.EarlyFraudWarningFeed} />;
const ElectionChoiceForm: React.FC<any> = (props) => <AIIntentStub view={View.ElectionChoiceForm} />;
const EventNotificationCard: React.FC<any> = (props) => <AIIntentStub view={View.EventNotificationCard} />;
const ExpectedPaymentsTable: React.FC<any> = (props) => <AIIntentStub view={View.ExpectedPaymentsTable} />;
const ExternalAccountCard: React.FC<any> = (props) => <AIIntentStub view={View.ExternalAccountCard} />;
const ExternalAccountForm: React.FC<any> = (props) => <AIIntentStub view={View.ExternalAccountForm} />;
const ExternalAccountTable: React.FC<any> = (props) => <AIIntentStub view={View.ExternalAccountsTable} />;
const FinancialAccountCard: React.FC<any> = (props) => <AIIntentStub view={View.FinancialAccountCard} />;
const IncomingPaymentDetailList: React.FC<any> = (props) => <AIIntentStub view={View.IncomingPaymentDetailList} />;
const InvestmentForm: React.FC<any> = (props) => <AIIntentStub view={View.InvestmentForm} />;
const InvoiceFinancingRequest: React.FC<any> = (props) => <AIIntentStub view={View.InvoiceFinancingRequest} />;
const PaymentInitiationForm: React.FC<any> = (props) => <AIIntentStub view={View.PaymentInitiationForm} />;
const PaymentMethodDetails: React.FC<any> = (props) => <AIIntentStub view={View.PaymentMethodDetails} />;
const PaymentOrderForm: React.FC<any> = (props) => <AIIntentStub view={View.PaymentOrderForm} />;
const PayoutsDashboard: React.FC<any> = (props) => <AIIntentStub view={View.PayoutsDashboard} />;
const PnLChart: React.FC<any> = (props) => <AIIntentStub view={View.PnLChart} />;
const RefundForm: React.FC<any> = (props) => <AIIntentStub view={View.RefundForm} />;
const RemittanceInfoEditor: React.FC<any> = (props) => <AIIntentStub view={View.RemittanceInfoEditor} />;
const ReportingView: React.FC<any> = (props) => <AIIntentStub view={View.ReportingView} />;
const ReportRunGenerator: React.FC<any> = (props) => <AIIntentStub view={View.ReportRunGenerator} />;
const ReportStatusIndicator: React.FC<any> = (props) => <AIIntentStub view={View.ReportStatusIndicator} />;
const SsiEditorForm: React.FC<any> = (props) => <AIIntentStub view={View.SsiEditorForm} />;
const StripeStatusBadge: React.FC<any> = (props) => <AIIntentStub view={View.StripeStatusBadge} />;
const StructuredPurposeInput: React.FC<any> = (props) => <AIIntentStub view={View.StructuredPurposeInput} />;
const SubscriptionList: React.FC<any> = (props) => <AIIntentStub view={View.SubscriptionList} />;
const TimeSeriesChart: React.FC<any> = (props) => <AIIntentStub view={View.TimeSeriesChart} />;
const TradeConfirmationModal: React.FC<any> = (props) => <AIIntentStub view={View.TradeConfirmationModal} />;
const TransactionFilter: React.FC<any> = (props) => <AIIntentStub view={View.TransactionFilter} />;
const TransactionList: React.FC<any> = (props) => <AIIntentStub view={View.TransactionList} />;
const TreasuryTransactionList: React.FC<any> = (props) => <AIIntentStub view={View.TreasuryTransactionList} />;
const TreasuryView: React.FC<any> = (props) => <AIIntentStub view={View.TreasuryView} />;
const VirtualAccountForm: React.FC<any> = (props) => <AIIntentStub view={View.VirtualAccountForm} />;
const VirtualAccountsTable: React.FC<any> = (props) => <AIIntentStub view={View.VirtualAccountsTable} />;
const WebhookSimulator: React.FC<any> = (props) => <AIIntentStub view={View.WebhookSimulator} />;


type WrapperProps = {
  Component: React.FC<any>;
  props?: any;
};

const Wrapper: React.FC<WrapperProps> = ({ Component, props = {} }) => {
  return <Component {...props} />;
};

const ModalWrapper: React.FC<WrapperProps> = ({ Component, props = {} }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Component
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      {...props}
    />
  );
};

const DataContextWrapper: React.FC<{ Component: React.FC<any>; extraProps?: any }> = ({ Component, extraProps = {} }) => {
  const dataContext = useContext(DataContext);
  const mockContext = {
    setActiveView: () => {},
    impactData: { treesPlanted: 0, progressToNextTree: 0 },
  };
  const props = { ...(dataContext || mockContext), ...extraProps };
  return <Component {...props} />;
};


// --- Enums ---
export enum View {
  Dashboard = 'dashboard',
  Transactions = 'transactions',
  SendMoney = 'send-money',
  Budgets = 'budgets',
  FinancialGoals = 'financial-goals',
  CreditHealth = 'credit-health',
  Personalization = 'personalization',
  Accounts = 'accounts',
  Investments = 'investments',
  CryptoWeb3 = 'crypto-web3',
  AlgoTradingLab = 'algo-trading-lab',
  ForexArena = 'forex-arena',
  CommoditiesExchange = 'commodities-exchange',
  RealEstateEmpire = 'real-estate-empire',
  ArtCollectibles = 'art-collectibles',
  DerivativesDesk = 'derivatives-desk',
  VentureCapital = 'venture-capital',
  PrivateEquity = 'private-equity',
  TaxOptimization = 'tax-optimization',
  LegacyBuilder = 'legacy-builder',
  CorporateCommand = 'corporate-command',
  ModernTreasury = 'modern-treasury',
  OpenBanking = 'open-banking',
  FinancialDemocracy = 'financial-democracy',
  AIAdStudio = 'ai-ad-studio',
  QuantumWeaver = 'quantum-weaver',
  AgentMarketplace = 'agent-marketplace',
  APIStatus = 'api-status',
  Settings = 'settings',
  QuantumAssets = 'quantum-assets',
  SovereignWealth = 'sovereign-wealth',
  Philanthropy = 'philanthropy',
  TheVision = 'the-vision',
  AIAdvisor = 'ai-advisor',
  AIInsights = 'ai-insights',
  SecurityCenter = 'security-center',
  ComplianceOracle = 'compliance-oracle',
  GlobalPositionMap = 'global-position-map',
  GlobalSsiHub = 'global-ssi-hub',
  CustomerDashboard = 'customer-dashboard',
  VerificationReports = 'verification-reports',
  FinancialReporting = 'financial-reporting',
  TheBook = 'the-book',
  KnowledgeBase = 'knowledge-base',
  CitibankAccounts = 'citibank-accounts',
  CitibankAccountProxy = 'citibank-account-proxy',
  CitibankBillPay = 'citibank-bill-pay',
  CitibankCrossBorder = 'citibank-cross-border',
  CitibankPayeeManagement = 'citibank-payee-management',
  CitibankStandingInstructions = 'citibank-standing-instructions',
  CitibankDeveloperTools = 'citibank-developer-tools',
  CitibankEligibility = 'citibank-eligibility',
  CitibankUnmaskedData = 'citibank-unmasked-data',
  PlaidMainDashboard = 'plaid-main-dashboard',
  PlaidIdentity = 'plaid-identity',
  PlaidCRAMonitoring = 'plaid-cra-monitoring',
  PlaidInstitutions = 'plaid-institutions',
  PlaidItemManagement = 'plaid-item-management',
  StripeNexus = 'stripe-nexus',
  CounterpartyDashboard = 'counterparty-dashboard',
  VirtualAccounts = 'virtual-accounts',
  SApp = 'sapp',
  CorporateActions = 'corporate-actions',
  CreditNoteLedger = 'credit-note-ledger',
  ReconciliationHub = 'reconciliation-hub',
  GEINDashboard = 'gein-dashboard',
  CardholderManagement = 'cardholder-management',
  SecurityCompliance = 'security-compliance',
  DeveloperHub = 'developer-hub',
  SchemaExplorer = 'schema-explorer',
  ResourceGraph = 'resource-graph',
  ApiPlayground = 'api-playground',
  VentureCapitalDeskView = 'venture-capital-desk-view', // Note: This seems like a duplicate of VentureCapital enum
  BusinessDemoView = 'business-demo-view',

  // Direct Component Access (add all your direct component View enums here)
  AccountDetails = 'account-details',
  AccountList = 'account-list',
  AccountStatementGrid = 'account-statement-grid',
  AccountVerificationModal = 'account-verification-modal',
  ACHDetailsDisplay = 'ach-details-display',
  AICommandLog = 'ai-command-log',
  AIPredictionWidget = 'ai-prediction-widget',
  AssetCatalog = 'asset-catalog',
  AutomatedSweepRules = 'automated-sweep-rules',
  BalanceReportChart = 'balance-report-chart',
  BalanceTransactionTable = 'balance-transaction-table',
  CardDesignVisualizer = 'card-design-visualizer',
  ChargeDetailModal = 'charge-detail-modal',
  ChargeList = 'charge-list',
  ConductorConfigurationView = 'conductor-configuration-view',
  CounterpartyDetails = 'counterparty-details',
  CounterpartyForm = 'counterparty-form',
  DisruptionIndexMeter = 'disruption-index-meter',
  DocumentUploader = 'document-uploader',
  DownloadLink = 'download-link',
  EarlyFraudWarningFeed = 'early-fraud-warning-feed',
  ElectionChoiceForm = 'election-choice-form',
  EventNotificationCard = 'event-notification-card',
  ExpectedPaymentsTable = 'expected-payments-table',
  ExternalAccountCard = 'external-account-card',
  ExternalAccountForm = 'external-account-form',
  ExternalAccountsTable = 'external-accounts-table',
  FinancialAccountCard = 'financial-account-card',
  IncomingPaymentDetailList = 'incoming-payment-detail-list',
  InvestmentForm = 'investment-form',
  InvoiceFinancingRequest = 'invoice-financing-request',
  PaymentInitiationForm = 'payment-initiation-form',
  PaymentMethodDetails = 'payment-method-details',
  PaymentOrderForm = 'payment-order-form',
  PayoutsDashboard = 'payouts-dashboard',
  PnLChart = 'pnl-chart',
  RefundForm = 'refund-form',
  RemittanceInfoEditor = 'remittance-info-editor',
  ReportingView = 'reporting-view',
  ReportRunGenerator = 'report-run-generator',
  ReportStatusIndicator = 'report-status-indicator',
  SsiEditorForm = 'ssi-editor-form',
  StripeStatusBadge = 'stripe-status-badge',
  StructuredPurposeInput = 'structured-purpose-input',
  SubscriptionList = 'subscription-list',
  TimeSeriesChart = 'time-series-chart',
  TradeConfirmationModal = 'trade-confirmation-modal',
  TransactionFilter = 'transaction-filter',
  TransactionList = 'transaction-list',
  TreasuryTransactionList = 'treasury-transaction-list',
  TreasuryView = 'treasury-view',
  UniversalObjectInspector = 'universal-object-inspector',
  VirtualAccountForm = 'virtual-account-form',
  VirtualAccountsTable = 'virtual-accounts-table',
  VoiceControl = 'voice-control',
  WebhookSimulator = 'webhook-simulator'
}


const MonetizationOverlay = () => {
  const context = useContext(DataContext);
  if (!context) return null;
  const { sovereignCredits } = context;
  return (
    <div className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex items-center gap-4 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Sovereign Balance:</span>
      <span className="text-cyan-400 font-mono text-lg font-bold tracking-tighter">
        {sovereignCredits.toLocaleString()} SC
      </span>
    </div>
  );
};

const SAppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dataContext = useContext(DataContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    datadogLogs.logger.info('App View Loaded', { name: 'SovereignNexus', id: 'init_view' });
  }, []);

  if (!dataContext || !authContext) return null;
  const { isAuthenticated, isLoading: authLoading } = authContext;
  const { isLoading: dataLoading, activeView, setActiveView } = dataContext;

  if (authLoading || (isAuthenticated && dataLoading)) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white gap-6">
        <Cpu className="w-20 h-20 text-cyan-400 animate-pulse" />
        <h1 className="text-3xl font-black tracking-[0.2em] italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 uppercase font-mono">
          Nexus OS // Syncing
        </h1>
        <div className="w-80 h-1 bg-gray-900 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 animate-progress-flow"></div>
        </div>
        <style>{`
          @keyframes flow { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
          .animate-progress-flow { animation: flow 2s linear infinite; width: 50%; }
        `}</style>
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const renderView = () => {
    switch (activeView) {
      case View.Dashboard: return <Dashboard />;
      case View.Transactions: return <TransactionsView />;
      case View.SendMoney: return <SendMoneyView />;
      case View.Budgets: return <BudgetsView />;
      case View.FinancialGoals: return <FinancialGoalsView />;
      case View.CreditHealth: return <CreditHealthView />;
      case View.Personalization: return <PersonalizationView />;
      case View.Accounts: return <AccountsView />;
      case View.Investments: return <InvestmentsView />;
      case View.CryptoWeb3: return <CryptoView />;
      case View.AlgoTradingLab: return <AlgoTradingLab />;
      case View.ForexArena: return <ForexArena />;
      case View.CommoditiesExchange: return <CommoditiesExchange />;
      case View.RealEstateEmpire: return <RealEstateEmpire />;
      case View.ArtCollectibles: return <ArtCollectibles />;
      case View.DerivativesDesk: return <DerivativesDesk />;
      case View.VentureCapital: return <VentureCapitalDesk />;
      case View.PrivateEquity: return <PrivateEquityLounge />;
      case View.TaxOptimization: return <TaxOptimizationChamber />;
      case View.LegacyBuilder: return <LegacyBuilder />;
      case View.CorporateCommand: return <CorporateCommandView setActiveView={setActiveView} />;
      case View.ModernTreasury: return <ModernTreasuryView />;
      case View.OpenBanking: return <OpenBankingView />;
      case View.FinancialDemocracy: return <FinancialDemocracyView />;
      case View.AIAdStudio: return <AIAdStudioView />;
      case View.QuantumWeaver: return <QuantumWeaverView />;
      case View.AgentMarketplace: return <AgentMarketplaceView />;
      case View.APIStatus: return <APIIntegrationView />;
      case View.Settings: return <SettingsView />;
      case View.QuantumAssets: return <QuantumAssets />;
      case View.SovereignWealth: return <SovereignWealth />;
      case View.Philanthropy: return <PhilanthropyHub />;
      case View.TheVision: return <TheVisionView />;
      case View.AIAdvisor: return <AIAdvisorView />;
      case View.AIInsights: return <AIInsights />;
      case View.SecurityCenter: return <SecurityView />;
      case View.ComplianceOracle: return <ComplianceOracleView />;
      case View.GlobalPositionMap: return <GlobalPositionMap />;
      case View.GlobalSsiHub: return <GlobalSsiHubView />;
      case View.CustomerDashboard: return <CustomerDashboard />;
      case View.VerificationReports: return <VerificationReportsView customerId="c1" />;
      case View.FinancialReporting: return <FinancialReportingView />;
      case View.TheBook: return <TheBookView />;
      case View.KnowledgeBase: return <KnowledgeBaseView />;
      case View.CitibankAccounts: return <CitibankAccountsView />;
      case View.CitibankAccountProxy: return <CitibankAccountProxyView />;
      case View.CitibankBillPay: return <CitibankBillPayView />;
      case View.CitibankCrossBorder: return <CitibankCrossBorderView />;
      case View.CitibankPayeeManagement: return <CitibankPayeeManagementView />;
      case View.CitibankStandingInstructions: return <CitibankStandingInstructionsView />;
      case View.CitibankDeveloperTools: return <CitibankDeveloperToolsView />;
      case View.CitibankEligibility: return <CitibankEligibilityView />;
      case View.CitibankUnmaskedData: return <CitibankUnmaskedDataView accountIdsToUnmask={['acc_1']} />;
      case View.PlaidMainDashboard: return <PlaidMainDashboard />;
      case View.PlaidIdentity: return <PlaidIdentityView />;
      case View.PlaidCRAMonitoring: return <PlaidCRAMonitoringView />;
      case View.PlaidInstitutions: return <PlaidInstitutionsExplorer client={new PlaidClient()} />;
      case View.PlaidItemManagement: return <PlaidItemManagementView accessToken="mock_token" />;
      case View.StripeNexus: return <StripeNexusView />;
      case View.CounterpartyDashboard: return <CounterpartyDashboardView />;
      case View.VirtualAccounts: return <VirtualAccountsDashboard />;
      case View.SApp: return <SApp />;
      case View.CorporateActions: return <CorporateActionsNexusView />;
      case View.CreditNoteLedger: return <CreditNoteLedger />;
      case View.ReconciliationHub: return <ReconciliationHubView />;
      case View.GEINDashboard: return <GEINDashboard />;
      case View.CardholderManagement: return <CardholderManagement />;
      case View.SecurityCompliance: return <SecurityComplianceView />;
      case View.DeveloperHub: return <DeveloperHubView />;
      case View.SchemaExplorer: return <SchemaExplorer schemaData={{ definitions: {}, properties: {} }} />;
      case View.ResourceGraph: return <ResourceGraphView />;
      case View.ApiPlayground: return <ApiPlaygroundView />;
      case View.VentureCapitalDeskView: return <VentureCapitalDeskView />;
      case View.BusinessDemoView: return <BusinessDemoView />;

      // --- Direct Component Access ---
      case View.AccountDetails:
        return <Wrapper Component={AccountDetails} props={{ accountId: '1', customerId: 'c1' }} />;
      case View.AccountList:
        return <Wrapper Component={AccountList} props={{ accounts: [] }} />;
      case View.AccountStatementGrid:
        return <Wrapper Component={AccountStatementGrid} props={{ statementLines: [] }} />;
      case View.AccountVerificationModal:
        return <ModalWrapper Component={AccountVerificationModal} props={{ externalAccount: {id: '1', verification_status: 'unverified' }, onSuccess: () => {}}} />;
      case View.ACHDetailsDisplay:
        return <Wrapper Component={ACHDetailsDisplay} props={{ details: { routingNumber: '123', realAccountNumber: '456' } }} />;
      case View.AICommandLog:
        return <AICommandLog />;
      case View.AIPredictionWidget:
        return <AIPredictionWidget />;
      case View.AssetCatalog:
        return <Wrapper Component={AssetCatalog} props={{ assets: [], onAssetSelected: () => {}, getAssetDetails: async () => ({}) }} />;
      case View.AutomatedSweepRules:
        return <AutomatedSweepRules />;
      case View.BalanceReportChart:
        return <Wrapper Component={BalanceReportChart} props={{ data: [] }} />;
      case View.BalanceTransactionTable:
        return <Wrapper Component={BalanceTransactionTable} props={{ balanceTransactions: [] }} />;
      case View.CardDesignVisualizer:
        return <Wrapper Component={CardDesignVisualizer} props={{ design: { id: 'd_1', physical_bundle: { features: {} } } }} />;
      case View.ChargeDetailModal:
        return <ModalWrapper Component={ChargeDetailModal} props={{ charge: {id: 'ch_1', amount: 50000, currency: 'USD', status: 'succeeded'}, onClose: () => {}}} />;
      case View.ChargeList:
        return <ChargeList />;
      case View.ConductorConfigurationView:
        return <ConductorConfigurationView />;
      case View.CounterpartyDetails:
        return <Wrapper Component={CounterpartyDetails} props={{ counterpartyId: 'cp_1' }} />;
      case View.CounterpartyForm:
        return <Wrapper Component={CounterpartyForm} props={{ counterparties: [], onSubmit: () => {}, onCancel: () => {} }} />;
      case View.DisruptionIndexMeter:
        return <Wrapper Component={DisruptionIndexMeter} props={{ indexValue: 50 }} />;
      case View.DocumentUploader:
        return <Wrapper Component={DocumentUploader} props={{ documentableType: 'test', documentableId: '1' }} />;
      case View.DownloadLink:
        return <Wrapper Component={DownloadLink} props={{ url: '#', filename: 'test.pdf' }} />;
      case View.EarlyFraudWarningFeed:
        return <EarlyFraudWarningFeed />;
      case View.ElectionChoiceForm:
        return <Wrapper Component={ElectionChoiceForm} props={{ availableChoices: {}, onSubmit: () => {}, onCancel: () => {} }} />;
      case View.EventNotificationCard:
        return <Wrapper Component={EventNotificationCard} props={{ event: {} }} />;
      case View.ExpectedPaymentsTable:
        return <ExpectedPaymentsTable />;
      case View.ExternalAccountCard:
        return <Wrapper Component={ExternalAccountCard} props={{ account: {id: '1', account_details: [], routing_details: []}}} />;
      case View.ExternalAccountForm:
        return <Wrapper Component={ExternalAccountForm} props={{ counterparties: [], onSubmit: () => {}, onCancel: () => {} }} />;
      case View.ExternalAccountsTable:
        return <Wrapper Component={ExternalAccountTable} props={{ accounts: [] }} />;
      case View.FinancialAccountCard:
        return <Wrapper Component={FinancialAccountCard} props={{ financialAccount: {id: 'fa_1', balance: { cash: {}}, supported_currencies: []}}} />;
      case View.IncomingPaymentDetailList:
        return <IncomingPaymentDetailList />;
      case View.InvoiceFinancingRequest:
        return <Wrapper Component={InvoiceFinancingRequest} props={{ onSubmit: () => {} }} />;
      case View.PaymentInitiationForm:
        return <PaymentInitiationForm />;
      case View.PaymentMethodDetails:
        return <Wrapper Component={PaymentMethodDetails} props={{ details: { type: 'card', card: {} }}} />;
      case View.PaymentOrderForm:
        return <Wrapper Component={PaymentOrderForm} props={{ internalAccounts: [], externalAccounts: [], onSubmit: () => {}, onCancel: () => {} }} />;
      case View.PayoutsDashboard:
        return <PayoutsDashboard />;
      case View.PnLChart:
        return <Wrapper Component={PnLChart} props={{ data: [], algorithmName: 'Test' }} />;
      case View.RefundForm:
        return <RefundForm />;
      case View.RemittanceInfoEditor:
        return <Wrapper Component={RemittanceInfoEditor} props={{ onChange: () => {} }} />;
      case View.ReportingView:
        return <ReportingView />;
      case View.ReportRunGenerator:
        return <ReportRunGenerator />;
      case View.ReportStatusIndicator:
        return <Wrapper Component={ReportStatusIndicator} props={{ status: 'success' }} />;
      case View.SsiEditorForm:
        return <Wrapper Component={SsiEditorForm} props={{ onSubmit: () => {}, onCancel: () => {} }} />;
      case View.StripeStatusBadge:
        return <Wrapper Component={StripeStatusBadge} props={{ status: 'succeeded', objectType: 'charge' }} />;
      case View.StructuredPurposeInput:
        return <Wrapper Component={StructuredPurposeInput} props={{ onChange: () => {}, value: null }} />;
      case View.SubscriptionList:
        return <Wrapper Component={SubscriptionList} props={{ subscriptions: [] }} />;
      case View.TimeSeriesChart:
        return <Wrapper Component={TimeSeriesChart} props={{ data: { labels: [], datasets: [] } }} />;
      case View.TradeConfirmationModal:
        return (
          <ModalWrapper
            Component={TradeConfirmationModal}
            props={{
              settlementInstruction: {
                messageId: 'NEX-INST-99281-Z',
                totalAmount: 12500000, // 125k
                currency: 'USD',
                creationDateTime: Date.now(),
                settlementDate: '2024-12-15',
                numberOfTransactions: 1,
                purpose: 'TREA'
              }
            }}
          />
        );
      case View.TransactionFilter:
        return <Wrapper Component={TransactionFilter} props={{ onApplyFilters: () => {} }} />;
      case View.TransactionList:
        return <Wrapper Component={TransactionList} props={{ transactions: [] }} />;
      case View.TreasuryTransactionList:
        return <Wrapper Component={TreasuryTransactionList} props={{ transactions: [] }} />;
      case View.TreasuryView:
        return <TreasuryView />;
      case View.UniversalObjectInspector:
        return <Wrapper Component={UniversalObjectInspector} props={{ data: { status: "Nominal", uptime: "99.999%", load: "Balanced" } }} />;
      case View.VirtualAccountForm:
        return <Wrapper Component={VirtualAccountForm} props={{ onSubmit: () => {}, isSubmitting: false }} />;
      case View.VirtualAccountsTable:
        return <Wrapper Component={VirtualAccountsTable} props={{ onEdit: () => {}, onDelete: () => {} }} />;
      case View.VoiceControl:
        return <DataContextWrapper Component={VoiceControl} />;
      case View.WebhookSimulator:
        return <Wrapper Component={WebhookSimulator} props={{ stripeAccountId: 'acct_mock' }} />;

      default: return <AIIntentStub view={activeView} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="relative flex flex-col flex-1 min-h-0">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 custom-scrollbar bg-[radial-gradient(circle_at_50%_0%,#111,transparent)]">
          <div className="max-w-[1600px] mx-auto h-full min-h-0">
            {renderView()}
          </div>
        </main>
        <MonetizationOverlay />
        <Link
          to="/modules"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] group"
          title="Open AI Nexus"
        >
          <Grid size={20} className="group-hover:animate-spin-slow" />
        </Link>
      </div>
    </div>
  );
};

const theme = createTheme({ palette: { mode: 'dark' } });

function App() {
  const onRedirectCallback = (appState) => {
  // If Auth0 provides a returnTo, use it; otherwise default to /dashboard
  window.location.replace(appState?.returnTo || "/dashboard");
};

  return (
    <Auth0Provider
  domain={import.meta.env.REACT_APP_AUTH0_DOMAIN || 'auth.aibanking.dev'}
  clientId={import.meta.env.REACT_APP_AUTH0_CLIENT_ID || 'zt6OsWvRgUtQsISRILfGFr7XhxwC6JgY'}
  onRedirectCallback={onRedirectCallback}
  authorizationParams={{
    redirect_uri: window.location.origin, // keep same
    audience: import.meta.env.REACT_APP_API_AUDIENCE || "https://auth.aibanking.dev/api",
    scope: "openid profile email offline_access"
  }}
  cacheLocation="localstorage"
  useRefreshTokens={true}
>
  <AuthProvider>
    <DataProvider>
      <MoneyMovementProvider>
        <StripeDataProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/modules" element={<ExternalIframeCollection />} />
                <Route path="/business-demo" element={<BusinessDemoView />} />
                <Route path="/dashboard" element={<SAppLayout />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* <-- changed */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} /> {/* <-- changed */}
              </Routes>
            </Router>
          </ThemeProvider>
        </StripeDataProvider>
      </MoneyMovementProvider>
    </DataProvider>
  </AuthProvider>
  <Analytics />
</Auth0Provider>
export default App;
