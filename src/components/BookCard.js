import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

class BookCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <Card className="bookCard">
          <CardActionArea onClick={this.handleOpen}>
            <div className="bookCardDetails">
              <CardContent className="bookCardContent">
                <Typography component="h5" variant="h5">
                  {this.props.book.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {this.props.book.authors.join(", ")}
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
          <CardMedia
            className="cardCover"
            image={this.props.book.imgUrl}
            component="img"
          />
        </Card>
        <Dialog
          open={open}
          onClose={this.handleClose}
          maxWidth="md"
          fullWidth={true}
        >
          <DialogTitle onClose={this.handleClose}>
            <Typography>{this.props.book.name}</Typography>
            <IconButton
              aria-label="close"
              className="closeButton"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Author</TableCell>
                  <TableCell>{this.props.book.authors.join(", ")}</TableCell>
                  <TableCell align="center" rowSpan={6}>
                    <img src={this.props.book.imgUrl}></img>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Publisher</TableCell>
                  <TableCell>{this.props.book.publisher}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Edition</TableCell>
                  <TableCell>{this.props.book.edition}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{this.props.book.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ISBN10</TableCell>
                  <TableCell>
                    {this.props.book.isbn10 + ", " + this.props.book.isbn13}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Votes</TableCell>
                  <TableCell>{this.props.book.votes}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography className="modalDescription" variant="h5">
              Description
            </Typography>
            <Typography variant="subtitle2">
              {this.props.book.description}
            </Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default BookCard;
