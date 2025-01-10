#!/bin/bash
case "$1" in
  "throttle")
    if tc qdisc show dev vcan0 | grep -q "qdisc tbf"; then
      tc qdisc del dev vcan0 root
    fi
    tc qdisc add dev vcan0 root tbf rate 10kbit burst $2 limit $2
    ;;
  "unthrottle")
    tc qdisc del dev vcan0 root
    ;;
  *)
    echo "Unknown command"
    exit 1
    ;;
esac