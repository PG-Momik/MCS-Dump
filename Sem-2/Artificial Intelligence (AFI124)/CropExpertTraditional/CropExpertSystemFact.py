from experta import KnowledgeEngine, Fact, Rule, DefFacts, P, W, NOT

class CropExpertSystemFact(KnowledgeEngine):
    @DefFacts()
    def _initial_facts(self):
        yield Fact(action="recommend_crop")
    
    @Rule(
        Fact(action="recommend_crop"),
        Fact(soil="clay"),
        Fact(pH=P(lambda x: 6.0 <= x <= 7.5)),
        Fact(rainfall="moderate"),
        Fact(temperature="cool")
    )
    def wheat_rule(self):
        self.declare(Fact(crop="Wheat"))
    
    @Rule(
        Fact(action="recommend_crop"),
        Fact(soil="loam"),
        Fact(pH=P(lambda x: 5.5 <= x <= 7.0)),
        Fact(rainfall="high"),
        Fact(temperature="warm")
    )
    def rice_rule(self):
        self.declare(Fact(crop="Rice"))
    
    @Rule(
        Fact(action="recommend_crop"),
        Fact(soil="sandy"),
        Fact(pH=P(lambda x: 5.0 <= x <= 6.5)),
        Fact(rainfall="low"),
        Fact(temperature="hot")
    )
    def millet_rule(self):
        self.declare(Fact(crop="Millet"))
    
    @Rule(
        Fact(action="recommend_crop"),
        Fact(soil="black"),
        Fact(pH=P(lambda x: 6.5 <= x <= 8.0)),
        Fact(rainfall="moderate"),
        Fact(temperature="warm")
    )
    def cotton_rule(self):
        self.declare(Fact(crop="Cotton"))
    
    @Rule(
        Fact(action="recommend_crop"),
        Fact(soil="red"),
        Fact(pH=P(lambda x: 5.5 <= x <= 7.0)),
        Fact(rainfall="moderate"),
        Fact(temperature="hot")
    )
    def groundnut_rule(self):
        self.declare(Fact(crop="Groundnut"))
    
    @Rule(
        Fact(action="recommend_crop"),
        NOT(Fact(crop=W()))
    )
    def no_recommendation(self):
        self.declare(Fact(crop="No suitable crop found based on given conditions."))

