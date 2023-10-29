deploy:
	flyctl deploy

fetch:
	cd public && wget -k -K  -E -r -l 10 -p -N -F --restrict-file-names=windows -nH http://www.zvarmontpk.sk/
