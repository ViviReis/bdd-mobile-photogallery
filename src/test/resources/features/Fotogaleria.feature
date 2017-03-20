Feature: Fotogaleria

  @fotogalerias
  Scenario: User should see six photo gallery Recommended menu
    Given that I'm at "http://m.oglobo.globo.com/fotogalerias/" url
     When I click on button "Não, obrigado" in "Notification"
     Then I see "Recommended 1"
      And I see "Recommended 2"
      And I see "Recommended 3"
      And I see "Recommended 4"
      And I see "Recommended 5"
      And I see "Recommended 6"
      
  @fotogalerias
  Scenario: User should see three  photo gallery More Views menu
    Given that I'm at "http://m.oglobo.globo.com/fotogalerias/" url
     When I click on button "Não, obrigado" in "Notification"
     Then I see "More Views 1"
      And I see "More Views 2"
      And I see "More Views 3"
      
  @fotogalerias
  Scenario: User should see three  photo gallery More Views menu
    Given that I'm at "http://m.oglobo.globo.com/fotogalerias/" url
     When I click on button "Não, obrigado" in "Notification"
     Then I see the option "Todas" selected