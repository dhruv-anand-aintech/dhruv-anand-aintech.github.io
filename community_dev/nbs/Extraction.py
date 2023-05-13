from pathlib import Path

import fire
import pandas as pd

from parsing_utils import DataFrameCleaner, WhatsAppMessageExtractor


def extract_messages(readpath):
    """
    Extracts messages from a WhatsApp chat export file

    Args:
        readpath (.txt): Explicit path to a WhatsApp chat export file, usually _chat.txt
    """
    readpath = Path(readpath)

    msg_extractor = WhatsAppMessageExtractor(readpath)
    messages = msg_extractor.extract_messages()

    df = pd.DataFrame(messages, columns=["Sender", "Datetime", "Message"])

    latest_date = df["Datetime"].max().date().strftime("%Y%m%d")
    print(f"Latest date is {latest_date}")
    savepath = f"../{latest_date}_Messages.csv"

    print(f"Before cleanup: {len(df)}")
    df_cleaner = DataFrameCleaner(df)
    df = df_cleaner.cleanup()
    print(f"After cleanup: {len(df)}")

    df.to_csv(savepath, index=False)


if __name__ == "__main__":
    fire.Fire(extract_messages)
