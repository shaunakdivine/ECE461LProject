import menu
import title
import login

title().deploy()

log_in_pg = login()
log_in_pg.deploy()

if(log_in_pg.get_opt() == 'register'):
    # do sign up stuff
elif(log_in_pg.get_opt() == 'check_in'):
    # do sign in

menu_pg = menu()
menu_pg.deploy()

# if-else block for menu options