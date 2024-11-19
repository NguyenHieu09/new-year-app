export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    BottomNavigation: undefined;
    GoldenScreen: undefined;
    CompetitionScreen: undefined;
    StockScreen: undefined;
    RoundFirstScreen: undefined;
    SupermarketScreen: undefined;
    EnvelopeScreen: undefined;
    AnswerQuestionScreen: undefined;
    RoundSecondScreen: undefined;
    ScrewScreen: { type: string };
    StartGameScreen: { type: string };
    QuestionScreen: undefined;
    ResultScreen: { score: number, totalQuestions: number };
    GameBanVitScreen: { opponent: any };
};