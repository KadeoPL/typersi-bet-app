import datetime
import re
from zoneinfo import ZoneInfo


def normalize_country_name(name: str) -> str:
    replacements = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
        'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z',
    }
    for pl, en in replacements.items():
        name = name.replace(pl, en)

    name = name.strip().replace(' ', '_')
    name = re.sub(r'_+', '_', name)

    return name.lower()


def convert_to_warsaw(date_str: str, time_str: str) -> tuple[str, str]:
    match = re.match(r"(\d{2}:\d{2}) UTC([+-]\d+)", time_str)
    if not match:
        raise ValueError(f"Invalid time format: {time_str}")

    time_part, offset_part = match.groups()

    dt_naive = datetime.datetime.strptime(f"{date_str} {time_part}", "%Y-%m-%d %H:%M")

    offset_hours = int(offset_part)
    tz = datetime.timezone(datetime.timedelta(hours=offset_hours))

    dt_with_tz = dt_naive.replace(tzinfo=tz)

    warsaw_tz = ZoneInfo("Europe/Warsaw")
    dt_warsaw = dt_with_tz.astimezone(warsaw_tz)

    return dt_warsaw.strftime("%Y-%m-%d"), dt_warsaw.strftime("%H:%M:%S")
