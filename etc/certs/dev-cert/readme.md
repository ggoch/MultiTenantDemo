key-cmd:openssl pkcs12 -in getabp.net.pfx -nocerts -nodes -out getabp.net.key -legacy -password pass:

crt-cmd:openssl pkcs12 -in getabp.net.pfx -clcerts -nokeys -out getabp.net.crt -legacy -password pass: