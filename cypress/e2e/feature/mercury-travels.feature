Feature: End to end testing of mercury travels website

    application Regression

    # Scenario: user is registred successfully as a new user
    #     Given User opens mercury travels page
    #     When User clicks on Customer Login
    #     When User clicks on register
    #     When Enters all the details
    #         # | firstname       | lastname       | email           | password           | confirm            | number         |
    #         | #acc_first_name | #acc_last_name | #acc_user_email | #acc_user_password | #acc_user_passconf | #acc_mobile_no |
    #         | xyz             | abc            | xyz@email.com   | 12345              | 12345              | 1234567890     |
    #     When User clicks register on form
    #     Then User should get registered





    # Scenario: user is registred successfully as a new user
    #     Given User opens mercury travels page
    #     When User clicks on Customer Login
    #     When User registers
    #         | #acc_first_name | #acc_last_name | #acc_user_email | #acc_user_password | #acc_user_passconf | #acc_mobile_no |
    #         | xyz             | abc            | xyz@email.com   | 12345              | 12345              | 1234567890     |
    #     Then User should get registered

    # Scenario: user gets error of already registered
    #     Given User opens mercury travels page
    #     When User clicks on Customer Login
    #     When User registers
    #         | #acc_first_name | #acc_last_name | #acc_user_email | #acc_user_password | #acc_user_passconf | #acc_mobile_no |
    #         | xyz             | abc            | xyz@email.com   | 12345              | 12345              | 1234567890     |
    #     Then User gets error of already registered

    Scenario: user logs in
        Given User opens mercury travels page
        When User clicks on Customer Login
        When User logs in
            | #sign_user_email | #sign_user_password |
            | xyz@email.com    | 12345               |
        Then User gets logged in

# Scenario: user goes to about us page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on about us option in dropdown
#     Then User should visit about us page

# Scenario: user goes to branches page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on Find a Branch option in dropdown
#     Then User should visit branch page

# Scenario: user goes to Testimonials page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on Testimonials option in dropdown
#     Then User should visit Testimonials page

# Scenario: user goes to Awards page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on Awards option in dropdown
#     Then User should visit Awards page

# Scenario: user goes to Careers page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on Careers option in dropdown
#     Then User should visit Careers page

# Scenario: user goes to Contact Us page
#     Given User opens mercury travels page
#     When User clicks on about us tab
#     When User clicks on Contact Us option in dropdown
#     Then User should visit Contact Us page

# Scenario: user goes to Insurance page
#     Given User opens mercury travels page
#     When User clicks on Insurance tab
#     Then User should visit Insurance page

# Scenario: user goes to Forex page
#     Given User opens mercury travels page
#     When User clicks on Forex tab
#     Then User should visit Insurance page

# Scenario: user goes to Forex page
#     Given User opens mercury travels page
#     Then User should see 7 scrolling images