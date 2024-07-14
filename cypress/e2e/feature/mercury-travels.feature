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
# Then User gets logged in